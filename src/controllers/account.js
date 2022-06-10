const account = require('../services/account');

const create = async (req, res) => {
    let result;
    const { Username, Email, Password, Name, Position, Role, Avatar } = req.body;
    const newAccount = {
        username: Username,
        email: Email,
        password: Password,
        name: Name,
        position: Position,
        role: Role,
        avatar: Avatar,
    };

    if (!newAccount.username) {
        result = {
            status: 0,
            message: 'Không được để trống tài khoản',
        }
        res.status(400).send(result);
    }

    else if (!newAccount.password || newAccount.password.length < 6) {
        result = {
            status: 0,
            message: 'Mật khẩu phải lớn hơn 6 ký tự'
        }
        res.status(400).send(result);
    }

    else {
        result = await account.create(newAccount)
        res.status(200).send(result);
    }
};



module.exports = {
    create
}