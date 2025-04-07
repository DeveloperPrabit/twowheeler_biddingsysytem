
const { Schema, model } = require("mongoose");
// const { use } = require("./user.api");

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true, select: false }
})


module.exports = model("user", UserSchema);