const Router = require('express').Router();
const auth = require('../controllers/auth');
const { tryCatch } = require('../middleware/errorHandle');

Router.post('/login', tryCatch(auth.login));

module.exports = Router;