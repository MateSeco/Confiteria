const { sequelize, Product } = require("../models/");
const productos = require("./productos");

module.exports = async function productSeeder() {
  await sequelize.sync({ force: true });
  await Product.bulkCreate(productos);

  console.log("Corre seeder de producto");
};
