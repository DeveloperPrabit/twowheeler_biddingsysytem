const bcrypt = require('bcrypt');

// Generate a salt
const GenerateHash = (payload) => {
    return bcrypt.hashSync(payload, Number(process.env.SALT_ROUNDS));
}

// Compare the password with the hash
const Comparehash = (hashPayload, payload) => {
    return bcrypt.compareSync(payload, hashPayload);
}

module.exports = { GenerateHash, Comparehash };