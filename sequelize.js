const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  database: "laboratorio", // El nombre de la base de datos
  username: "APOLO", // El nombre de usuario de la base de datos
  password: "laboratorio",
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;