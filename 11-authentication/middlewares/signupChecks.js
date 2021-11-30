const {emailValidator} = require("../utils/emailValidator");
const {passwordValidator} = require("../utils/passwordValidator");

const signupChecks = (req, res, next) => {

  const {email, password, confirmPassword} = req.body;
  if(
    password === confirmPassword &&
    emailValidator(email) &&
    passwordValidator(password) &&
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    password.length > 6
       ) {
    next();
  }
  else {
    res.status(401).send("Your credentials do not meet our requirements.");
  }
};

module.exports = signupChecks;