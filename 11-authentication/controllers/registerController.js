const User = require("../models/users");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const registerController = async(req, res) => {

  const {email, password} = req.body;

  try {
    const alreadyExists = await User.findOne({where: {email}});
    if(alreadyExists)
      res.status(401).send("Email already exists");

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const User = new User({ email: email.toLowerCase(), password: hash});
    const savedUser = await User.save();

    res.status(201).send("User registered successfully");
  }
  catch(err) {
    console.error(err);
    res.send(500).send("Error !");
  }
}

module.exports = registerController;