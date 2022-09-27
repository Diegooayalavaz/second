const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log("servidor levantado"));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

app.get("/test", (req, res) => {
    res.send("it works");
})

//CONECT MONGODB
mongoose.connect(process.env.MDB_CONNECT).then(() => console.log("Conectado a BD"));


//Set up routes
app.use("/auth", require("./routes/userRouter"));
app.use("/customer", require("./routes/customerRouter"));