const Router = require('express').Router();
const auth = require('../controllers/auth');
const { tryCatch } = require('../middleware/errorHandle');
const { reqLogin, reqRole } = require('../middleware/auth');

Router.post('/login', tryCatch(auth.login));
Router.get('/getMe', reqLogin, reqRole('admin'), tryCatch(auth.getMe));

module.exports = Router;