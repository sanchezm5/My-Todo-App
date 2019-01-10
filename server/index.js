const path = require('path');
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

const app = express();
module.exports = app;

//Logging Middleware
app.use(morgan('dev'));

//Body-Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Static Middleware
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api')) // include our routes!

//Sends index.html for any requests that don't match one of the API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//Error Handling Endware
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// start listening (and create a 'server' object representing our server)
app.listen(PORT, () => {
    console.log(`Your server is listening on port ${PORT}`)
});
