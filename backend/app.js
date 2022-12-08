const express = require('express');
const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path:'./config.env'});

require('./db/connection');

app.use(express.json());

app.use(require('./router/auth'));

const User = require('./model/userSchema');

app.use(express.json());
// app.use(cookieParser());

const PORT= process.env.PORT;

const middleware = (req, res, next) => {
    console.log("hello my middleware");
    next();
}

// if (process.env.NODE_ENV == 'production') {
//     app.use(express.static("client/build"));
// }

app.listen(PORT, ()=> {
    console.log(`server is running at port ${PORT}`);
})
app.get('/', (req, res) => {
    res.send("hello world from the server");
})
1
app.get('/Contactlist', (req, res) => {
    res.send("hello world to Contact List");
})

app.get('/AddContact',(req, res) => {
    res.send("hello world to Add Contact from app.js");
})

// module.exports = router;