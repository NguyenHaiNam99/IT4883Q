const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const JWT_SECRET_KEY = 'adsadbasdnasjdnoqiw123';

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
    const token = jwt.sign({ username, role }, JWT_SECRET_KEY,
        {
            expiresIn: 30,
        });
    return token;
};

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET_KEY, (err, data)=>{
        if (err) return {err:"Token hết hạn"};
        else return data;
    });
};


module.exports = {
    genHashPassword,
    confirmPassword,
    genToken,
    verifyToken,
}
