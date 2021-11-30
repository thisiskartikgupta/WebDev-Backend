
const passwordValidator = password => {
  const re = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return re.test(password);
}

module.exports = passwordValidator;