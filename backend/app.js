const express = require('express');
const app = express();

//middleware

const cors = require('cors')
const morgan = require('morgan');


app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

// routes
app.use('/api/auth', require('./features/auth/authRoute'));

module.exports = app;
