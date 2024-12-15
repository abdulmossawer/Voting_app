const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const rateLimit = require("express-rate-limit")

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// middleware for rate limiter
let limiter = rateLimit({
    max: 2,
    windowMs: 60 * 60 * 1000,
    message: 'We have recived to many request from this IP. Please try after one hour'
})

app.use("/candidate", limiter)

// const {jwtAuthMiddleware} = require('./jwt');


// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})