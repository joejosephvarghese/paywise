import { error } from "console";
import { Category, Product } from "../models/index.js";

const addProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.status(200).json("ok");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.findAll({
      include: {
        model: Category,
        attributes:['id','name'],
      },
    });
    res.status(200).json({"results":product});
  } catch (error) {}
};

export { addProduct, getAllProducts };
