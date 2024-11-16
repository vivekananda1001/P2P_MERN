const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
require('dotenv').config({ path: '../passwords.env'});

mongoose.connect(process.env.MONGO_URL);

const userSchema = new Schema({
    userName: {type:String, unique: true},
    password: String
})

const userModel = mongoose.Model("user",userSchema);

module.exports = userModel;
