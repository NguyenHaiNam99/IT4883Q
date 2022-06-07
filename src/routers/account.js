const Router = require('express').Router();
const account = require('../controllers/account');
const { tryCatch } = require('../middleware/errorHandle');

Router.post('/', tryCatch(account.create));
Router.get('/', (req,res) => res.send('hehe'));

module.exports = Router;