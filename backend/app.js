const express = require('express');
const app = express();

//middleware

const cors = require('cors')
const morgan = require('morgan');
const path = require('path');

// Para ma-access ang uploaded files (static)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

// routes
app.use('/api/auth', require('./features/auth/authRoute'));
app.use('/api/product', require('./features/products/productRoute'))
app.use('/api/cart', require('./features/cart/cartRoute'))

module.exports = app;
