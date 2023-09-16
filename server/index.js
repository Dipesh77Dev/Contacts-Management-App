// import express from 'express';   import 'dotenv/config'; // React method, type: module(package.json)

// import packages -->

require('dotenv').config();  
const express = require('express');  
const connectDB = require('./config/db.config');
const contactRouter = require('./routes/contact.router');

// using app as an express & adding middleware  -->
const app = express();

app.use(express.json());


// testing apis -->
app.get('/test', (req, res) => {
    res.send("Testing api");
});

app.get('/test1', (req, res) => {
    res.json("Testing api in json");
});

// actual apis -->
app.use("/api", contactRouter);

// const PORT = 5999;
const port = process.env.PORT;

// listening on server -->

app.listen(port, () => {
    console.log(`Listening on server with port - ${port}`)
    connectDB()
});

// app.listen(() => {
//     console.log(`Listening on server with port - ${PORT}`)
// });