const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lasttName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    status: {
        type: Boolean
    }
})
module.exports = mongoose.model("users",userSchema)