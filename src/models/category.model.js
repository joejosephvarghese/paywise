import { DataTypes } from "sequelize";

import sequelize from "./connection.js";

const Category = sequelize.define("Category",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})

export default Category 
