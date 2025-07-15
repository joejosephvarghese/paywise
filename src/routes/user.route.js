import express from "express"

const router= express.Router()

import {register} from '../controllers/user.conntroller.js';

router.post("/",register)


export default router