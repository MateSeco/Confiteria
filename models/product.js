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
    quantity: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "defaultImage.jpg",
    },
    imageAlt: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "defaultImage",
    },
  });

  console.log(Product === sequelize.models.Product);
  return Product;
};

module.exports = productModel;
