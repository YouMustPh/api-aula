const { Sequelize } = require("sequelize");

const options = {
  username: "postgres",
  password: "admin",
  host: "localhost",
  dialect: "postgres",
  database: "notes",
  port:1125
};

const sequelize = new Sequelize(options);
sequelize
  .authenticate()
  .then(() => {
    console.log("conectado ao banco de dados");
  })
  .catch((erro) => {
    console.log(erro);
  })



  module.exports = {sequelize, Sequelize}