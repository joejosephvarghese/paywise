import express from "express"

const router= express.Router()

import { addProduct,getAllProducts } from "../controllers/product.contorller.js"



router.post("/",addProduct)


router.get("/",getAllProducts)





export default router