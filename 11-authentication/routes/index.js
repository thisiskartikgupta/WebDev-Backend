var express = require('express');
var router = express.Router();

let signupChecks = require("../middlewares/signupChecks");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires {email, fullName, password, confirmPassword}
 * @description route for registration
 * Check for - security, performance, edge cases
 * Validation for email, password (password === confirm password)
 * Check for SQL Injection and XSS
 * hashing in password
 * converting email to lowercase, trimming spaces etc
 */
router.post('/signup', (req, res) => {

});

module.exports = router;
