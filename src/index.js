const express = require('express');
const app = express();
const PORT = 3001;

const checkHealth = (req, res)=> {
    res.send({
        status: 1,
        message: 'Server alive',
    });
};

app.get('/', checkHealth);

app.listen(PORT, err => {
    if (err) console.log(err);
    else console.log('\x1b[32m',`app listen at ${PORT}`);
})

