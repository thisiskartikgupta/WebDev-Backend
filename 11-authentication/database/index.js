
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
  "postgres",
  "postgres",
  "123456789",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

sequelize.sync();

//Ensure to use try catch with async
(async() => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB succesfully");
  }
  catch(err) {
    console.log("Error connecting to DB \n Description : " + err);
  }
})();

module.export = sequelize;