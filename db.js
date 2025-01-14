const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect("mongodb://localhost:27017");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});
const User = mongoose.modle("User", userSchema);


const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',   // Reference to User model
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});
const Account = mongoose.model('Account'
    , accountSchema);

module.exports = {
    Account
}



module.exports = {
    User
};