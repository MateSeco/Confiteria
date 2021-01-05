const productModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "defaultImage",
    },
    imageAlt: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  });

  console.log(Product === sequelize.models.Product);
  return Product;
};

module.exports = productModel;
