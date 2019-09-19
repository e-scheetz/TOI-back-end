'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    productImage: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    likes: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};