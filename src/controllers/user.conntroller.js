import { error } from "console";
import { User } from "../models/index.js";

const register = async (req, res) => {
  try {

    console.log("hit hrer");
    const { email, firstName, lastName } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      throw new Error("User is already registered");
    }

    await User.create(req.body);

    res.status(200).json("Ok");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { register };
