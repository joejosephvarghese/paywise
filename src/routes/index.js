import express from "express";
import userRoute from "./user.route.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
];

defaultRoutes.forEach(({ path, route }) => {
  router.use(path, route); 
});

export default router; 
