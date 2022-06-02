const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');


const db = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-52-48-159-67.eu-west-1.compute.amazonaws.com',
        user: 'ubntfmpirwovit',
        password: '718b3f552187ac8828695612e7709e116c4c3232d4b638693e9cc5ee617d4cdd',
        database: 'dbg9jojln8f8rf',
        port: 5432
    },
    useNullAsDefault: true,
});

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    try {
        const {email, password} = req.body;
        const hash = await bcrypt.hash(password, 10); 
        await db('users').insert({email: email, hash: hash});
        res.status(200).json('All good!')
    } catch(e) {
        console.log(e);
        res.status(500).send('Something broke!')
    }
});
app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await db('users').first('*').where({email: email});
        if (user) {
            const validPassword = await bcrypt.compare(password, user.hash);
            if (validPassword){
                res.status(200).json('Valid email and password!')
            } else {
                res.json('Wrong password!');
            }
        } else{
            res.status(404).json('User not found!');
        }
    } catch(e) {
        console.log(e);
        res.status(500).send('Something broke!')
    }
})

// Error handling
app.use(function(err, req, res, next){
    console.log(err.stack);
})

app.set("db", db);

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));
