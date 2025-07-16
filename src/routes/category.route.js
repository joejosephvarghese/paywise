import express from "express";

const router = express.Router();

import { addCategory } from "../controllers/category.controller.js";

router.post("/", addCategory);


export default router;
