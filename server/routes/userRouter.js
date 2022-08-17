const router = require("express").Router();
const User = require("../models/userModel");

router.post("/", async (req,res) => {
    //res.send("test");
    //console.log(req.body);
    try{
        const {email, password, passwordVerify} = req.body;

        //Validation
        if(!email || !password || !passwordVerify){
            return res
            .status(400)
            .json({errorMessage: "Please enter all required fields."});
        }

        if(password.length < 6){
            return res
            .status(400)
            .json({errorMessage: "Please enter a passwordat least 6 characters."});
        }

        if(password !== passwordVerify){
            return res
            .status(400)
            .json({errorMessage: "Please enter the same password twice."});
        }
        
        const existingUser = await User.findOne({email: email});
        if(existingUser){
            return res
            .status(400)
            .json({errorMessage: "An account with this email already exists."});
        }

        
    }catch(err){
        console.error(err);
        res.status(500).send(); // THIS NEVER SEND, HACKERS APPROACH THE STATUS AND HACK PAGE
    }
});

module.exports = router;