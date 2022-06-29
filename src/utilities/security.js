const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { saltRounds, JWT_SECRET_KEY_ACESS_TOKEN, TOKEN_TIME } = require('../config');

// Ma hoa 1 chieu
const genHashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
};

const confirmPassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword);
};

// Ma hoa 2 chieu
const genToken = ({ username, role }) => {
    const token = jwt.sign({ username, role }, JWT_SECRET_KEY_ACESS_TOKEN,
        {
            expiresIn: TOKEN_TIME,
        });
    return token;
};

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET_KEY_ACESS_TOKEN, (err, data) => {
        if (err) {
            console.log(err);
            return { err: "Token không thoả mãn" };
        }
        else return data;
    });
};


module.exports = {
    genHashPassword,
    confirmPassword,
    genToken,
    verifyToken,
}
