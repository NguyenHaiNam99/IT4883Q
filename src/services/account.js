const db = require('../utilities/db');
const security = require('../utilities/security')

const create = async ({ username, email, password, name, position, role, avatar }) => {
    const checkUserSql = `select count(username) as size from Account where username = ?`;
    const checkExists = await db.queryOne(checkUserSql, [username]);
    
    if (checkExists[0].size > 0) {
        return 'Tài khoản đã tồn tại!';
    }

    const encodePassword = await security.genHashPassword(password);
    console.log(encodePassword);

    const sql = `insert into Account(username, email, password, name, position, role, avatar) values(?,?,?,?,?,?,?)`;
    
    await db.queryOne(sql, [username, email, encodePassword, name, position, role, avatar]);
    return "Tạo tài khoản thành công";
};

module.exports = {
    create,
}