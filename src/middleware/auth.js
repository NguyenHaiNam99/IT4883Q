const security = require('../utilities/security');

const reqLogin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = security.verifyToken(token);
        req.username = decodedToken.username;
        req.role = decodedToken.role;
        next();
    } catch (err) {
        console.log(err);
        console.log(role);
        next('Xác thực thất bại!');
    }
};

const reqRole = (role) => {
    const middleware = async (req, res, next) => {
        if (req.role === role) next();
        else {
            console.log(req.role);
            console.log(role);
            next('Không được cấp quyền!');
        }
    }
    return middleware();
};

module.exports = {
    reqLogin,
    reqRole,
}