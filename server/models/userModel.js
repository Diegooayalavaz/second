const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    passwordHash: {type: String, required: true},
});


//se pone el nombre de la conexión pero en singular, ya en la BD, la creará o se verá con una 's' al final, aquí la vería como "sample_firsts"
const User = mongoose.model('user', userSchema);


module.exports = User;