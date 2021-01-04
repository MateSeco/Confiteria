const { Sequelize, DataTypes } = require("sequelize");
const productModel = require("./product");

//  Conexion a DB
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectModule: require("mysql2"),
  }
);

const Product = productModel(sequelize, DataTypes);

module.exports = { sequelize, Sequelize, Product };
