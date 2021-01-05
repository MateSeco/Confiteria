const productController = require("../controllers/productController");

module.exports = function routes(app) {
  app.get("/", productController.all);
};
