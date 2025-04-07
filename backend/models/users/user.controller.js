
const userModel = require("./user.model");
const { GenerateHash, Comparehash } = require("../../utils/hash");

const create = async (payload) => {
    const { email, password } = payload;

    const alreadyRegistered = await userModel.findOne({ email });
    if (alreadyRegistered) throw new Error("User already registered...");
    payload.password = GenerateHash(password);

    const result = await userModel.create(payload);
    if (!result) return res.status(400).json({ msg: "User registration failed..." });
    return result;
}

const login = async (payload) => {
    try {
        const { username, email, password } = payload;
        const user = await userModel.findOne({ email, isActive: true });
        if (!user) return res.status(400).json({ msg: "User not found please create a new account..." });



    } catch (e) {
        next(e);
    }
}

module.exports = {
    create,

}