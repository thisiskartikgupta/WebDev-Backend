const express = require('express');
const app = express();

// CRUD = POST, GET, PUT, DELETE
app.get('/', (req, res) => {
    res.send("hello"+req);

    //? res is an object which has all these properties of status code, message, data etc
    //? And it has a function called send:()=>{} when called sends the data/transmits the request. So anything after send wont work
});

app.post('/', (req, res) => {
    // res.status(203);
    // 100s - informational
    // 200s - success OK
    // 201 - db updated
    // 300s - redirection
    // 400s - client errors
    // 500s - server error
    //res.json allows to send json data only.
    // console.log(req.query);
    // console.log(req.params);
    res.json({ss: 22, type: "Post request maara hai"});
    //res.send("bye"+req);
});

app.put('/', (req, res) => {
    res.json({
        type: "put request aaya hai."
    })
});

app.delete('/', (req, res) => {
    res.json({
        type: "delete request aaya hai."
    })
});

app.get('/test', (req,res) => {
    res.json(req.query);
});

//Route shorthands
// route for wild, wld
app.get('/wi?ld', (req,res) => {
    res.json({'very wild':'extreme'});
});

//route for akartikgupta, agupta
app.get('/a(kartik)?gupta', (req,res) => {
    res.json({'very wild':'extreme very wise.'});
});

// route for abc, abbcd, abbbbbbbbbbbbbbbbbbcd (any number of b)
app.get('/ab+cd', (req,res) => {
    res.json({'abcd':'no of b doesnt matter'});
});

app.get('/12*34', (req,res) => {
    res.json({'12*34':'anything between 12 and 34 makes no difference to this server. This includes even spaces. Damn !!'});
});

//WE CAM ALSO USE REGEX HERE
app.get(/z/, (req,res) => {
    res.json({'zroori':'your route is starting from z.haha i know'});
});


//Dynamic routes
app.get('/presidents/:country/:name/batado', (req,res) => {
    res.json({'zroori':'dynamic route haa , getting better yeahh!! '});
});

app.listen(5000);

// We have encodeURIComponent that converts spaces etc characters in a given url to %20F etc type format