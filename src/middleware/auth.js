const e = require('express');
const security = require('../utilities/security');

const reqLogin = (req, res, next) => {
    try {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if (token) {
            const decodedToken = security.verifyToken(token);
            if (decodedToken.err) {
                res.status(401).send({
                    status: 1,
                    message: decodedToken.err,
                });
            } else {
                req.username = decodedToken.username;
                req.role = decodedToken.role;
                next();
            }
        } else {
            res.status(400).send({
                status: 1,
                message: 'Không có token',
            })
        }
    } catch (err) {
        console.log(err);
        next({
            status: 1,
            message: 'Xác thực thất bại!',
        });
    }
};

const reqRole = (role) => async (req, res, next) => {
    if (req.role === role) next();
    else {
        res.status(403).send({
            status: 1,
            message: 'Không được cấp quyền',
        })
    }
};


module.exports = {
    reqLogin,
    reqRole,
}