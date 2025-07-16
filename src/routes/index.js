import express from "express";
import userRoute from "./user.route.js";
import productRoute from "./product.route.js"
import categoryRoute from "./category.route.js"

const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path:"/product",
    route:productRoute
  },
   {
    path:"/category",
    route:categoryRoute
  }
  
];

defaultRoutes.forEach(({ path, route }) => {
  router.use(path, route); 
});

export default router; 
