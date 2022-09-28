const router = require("express").Router();
const Customer = require("../models/customerModel");
const auth = require("../middleware/auth");


router.post("/", auth, async (req, res) => {
    try {


        const newCustomer = new Customer(req.body);

        console.log("este es el nuevo customer:" + newCustomer);
        const savedCustomer = await newCustomer.save();

        res.json(savedCustomer);

    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});


router.get("/", auth, async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

module.exports = router;
