import { error } from "console";
import {Category } from "../models/index.js";

const addCategory = async (req, res) => {
  try {
    await Category.create(req.body);

    res.status(200).json("ok")
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const editCategory =async(req,res)=>{

}

export { addCategory,editCategory };
