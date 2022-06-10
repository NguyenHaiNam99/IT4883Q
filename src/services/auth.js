const db = require('../utilities/db');
const security = require('../utilities/security');

const login = async (usernameInput, passwordInput) => {
    const getUserSql = `select username, password, role from Account where username = ?`;
    const checkUser = await db.queryOne(getUserSql, [usernameInput]);
    if (!checkUser[0]) return false;
    const {username, password, role} = checkUser[0];
    const comparePassword = await security.confirmPassword(passwordInput, password);
    if (comparePassword) {
        const acessToken = await security.genToken({username, role});
        return acessToken;  
    }
};

const getMe = async (username) => {
    const sql = `select username, role, email, name, position, avatar from Account where username = ?`;
    const data = await db.queryOne(sql, [username]);
    return data;
};

module.exports = {
    login,
    getMe,
};