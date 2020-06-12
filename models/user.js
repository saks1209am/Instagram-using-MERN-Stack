const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/saksham12/image/upload/v1591943735/default-user-image_f0fcxk.png"
    },
    followers: [{ type: ObjectId, ref: "User" }],
    following: [{ type: ObjectId, ref: "User" }]
})

mongoose.model("User", userSchema)