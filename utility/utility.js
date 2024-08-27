var bcrypt = require("bcrypt");

function generatePasswordHash(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt)
    return hash;
}

module.exports = generatePasswordHash;
