const auth = require('../services/auth');

const login = async (req, res) => {
    const { username, password } = req.body;
    const result = await auth.login(username, password);
    console.log(result)
    if (result) {
        return res.status(200).send({
            status: 0,
            acessToken: result,
        })
    }
    return res.status(400).send({
        status: 1,
        message: "Đăng nhập thất bại!",
    })
};

module.exports = {
    login,
}