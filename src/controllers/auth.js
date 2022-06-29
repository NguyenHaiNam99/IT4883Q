const auth = require('../services/auth');

const login = async (req, res) => {
    const { username, password } = req.body;
    const result = await auth.login(username, password);
    if (result) {
        return res.status(200).send({
            status: 0,
            acessToken: result,
        });
    }
    return res.status(400).send({
        status: 1,
        message: "Đăng nhập thất bại!",
    });
};

const getMe = async (req, res) => {
    const username = req.username;
    const data = await auth.getMe(username);
    return res.status(200).send({
        status: 0,
        data
    });
}

module.exports = {
    login,
    getMe,
}