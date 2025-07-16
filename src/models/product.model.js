import { DataTypes } from "sequelize";

import sequelize from "./connection.js";
import Category from "./category.model.js";

const Product = sequelize.define("Product", {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  quantity: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.INTEGER,
  },

  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: Category,
      key: "id",
    },
  },
});

Product.belongsTo(Category, { foreignKey: "category" });
Category.hasMany(Product, { foreignKey: "category" });

export default Product;
