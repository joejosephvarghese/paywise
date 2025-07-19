import express from "express";

const router = express.Router();

import { addCategory,editCategory } from "../controllers/category.controller.js";

router.post("/", addCategory);

router.post("/", editCategory);


export default router;
