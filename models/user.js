const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    idCard: String,
    fullName: String,
    Position: String,
    Department: String,
    dateStart: String,
    username: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);