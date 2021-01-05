/* const { sequelize, Sequelize, Product } = require("../models"); */
const products = require("../seeders/productos");

module.exports = {
  all: (req, res) => res.render("index", { products }),
};
