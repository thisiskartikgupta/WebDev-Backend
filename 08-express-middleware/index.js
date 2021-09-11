// We will always encode params using encodeURIComponent
//  even though params have special chars or not.

const express = require('express');

const app = express();

// This is middleware in express. It helps in executing a function before the actual
// process begins. Its like componentDidMount for React,i.e. procesing before actual
// execution takes place. Also this method can have n number of arguments.
app.get('/', (req, res, next) => {
  console.log('First function');
  // function middleware body
  next();
}, (req, res) => {
  res.send('Second function next()');
});

/*  The next can be used to provide access to a certain resource . Like
    if(req.query.admin === true)
        next()
    else
        res.send("no access")
*/

/* Suppose a middleware function has to be used in every route of express. In such
   case we use
    app.use(function(){});
    NOTE :: Order of app.use() matters. It should come before route defns. What happens
    is it comes after your function execution instead of acting as a middleware.
*/
/* 401 - status code for not authorized */
/* status codes define whether .then() will execute or .catch() for fetch */

/* The browser caches GET requests to save the server from load. This causes
    GET queries to get searched in cached first and if they are not present then it is
    fetched from API. This cause the 200 to change to 304 status code.
    the 304 status code means NOT MODIFIED.
*/
/*
    Since GET calls are cached and cache is easily accessible. This makes it
    GET an insecure method for sending things like passwords.
    and hence we use POST instead since it is not cached.
    HTML Forms use POST.
*/

/* POST request do not accept req.body() calls by default.
    In order to make it access, we use a third party package called body-parser
    and attach as middleware.
    However, from express 4.16+, express has its own built in system for this.
*/

/*
npm install --save body-parser
You may have added a line to your code that looks like the following:
app.use(bodyparser.json()); //utilizes the body-parser package
If you are using Express 4.16+ you can now replace that line with:
app.use(express.json()); //Used to parse JSON bodies
This should not introduce any breaking changes into your applications since
the code in express.json() is based on bodyparser.json().
If you also have the following code in your environment:
app.use(bodyParser.urlencoded({extended: true}));
You can replace that with:
app.use(express.urlencoded()); //Parse URL-encoded bodies

However there are cases where you may still require a body-parser package.
*/

app.listen(5000);
