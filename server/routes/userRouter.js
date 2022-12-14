const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {

    try {
        const { email, password, passwordVerify } = req.body;
 
        //Validation
        if (!email || !password || !passwordVerify) {
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });
        }

        if (password.length < 6) {
            return res
                .status(400)
                .json({ errorMessage: "Please enter a passwordat least 6 characters." });
        }

        if (password !== passwordVerify) {
            return res
                .status(400)
                .json({ errorMessage: "Please enter the same password twice." });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res
                .status(400)
                .json({ errorMessage: "An account with this email already exists." });
        }

        //HASH THE PASSWORD
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);


        //SAVE A NEW USER ACCOUNT TO THE DB

        const newUser = new User({
            email, passwordHash
        });
        const savedUser = await newUser.save();


        //LOG THE USER IN 
        const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_SECRET
        );

        console.log("token es" + token);

        //send the token in a HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        }).send();


    } catch (err) {
        console.error(err);
        res.status(500).send(); // THIS NEVER SEND, HACKERS APPROACH THE STATUS AND HACK PAGE
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //Validation
        if (!email || !password) {
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res
                .status(401)
                .json({ errorMessage: "Wrong email or password." });
        }

        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);

        if (!passwordCorrect) {
            return res
                .status(401)
                .json({ errorMessage: "Wrong email or password." });
        }

        //LOG THE USER IN 
        const token = jwt.sign({
            user: existingUser._id
        }, process.env.JWT_SECRET
        );

        console.log(token);

        //send the token in a HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        }).send();


    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});



router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send();
});


router.get("/loggedIn", (req, res) => {
    try {
        console.log(req.cookies.token);
        const token = req.cookies.token;

        if (!token) {
            return res.json(false);
        }

        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);

    } catch (error) {
        console.error(error);
        res.json(false);
    }
});



module.exports = router;