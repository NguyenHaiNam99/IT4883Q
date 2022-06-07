const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3001;

app.use(bodyParser.json());
const account = require('./routers/account');

const checkHealth = (req, res)=> {
    console.log(req)
    res.send({
        status: 1,
        message: 'Server alive',
    });
};

app.use('/account', account);
app.get('/', checkHealth);

app.listen(PORT, err => {
    if (err) console.log(err);
    // else console.log('\x1b[32m',`app listen at ${PORT}`);
    else console.log(`app listen at ${PORT}`);
})
