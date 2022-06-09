const db = require('../utilities/db');
const security = require('../utilities/security');

const login = async (usernameInput, passwordInput) => {
    const getUserSql = `select username, password, role from Account where username = ?`;
    const checkUser = await db.queryOne(getUserSql, [usernameInput]);
    const {username, password, role} = checkUser[0];
    if (!checkUser) return false;
    const comparePassword = await security.confirmPassword(passwordInput, password);
    if (comparePassword) {
        const acessToken = await security.genToken({username, role});
        return acessToken;  
    }
}

module.exports = {
    login,
};