import express from "express";
import dotenv from "dotenv";
import sequelize from "./models/connection.js";
import Routes from "./routes/index.js";
import { manageQuees } from "./services/user.service.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", Routes);

manageQuees();

sequelize
  .authenticate()
  .then(() => {
    console.log(` Database Connected`);
    console.log("Logging config:", sequelize.options.logging);

    return sequelize.sync({ alter: true, logging: false });
  })
  .then(() => {
    console.log(" All models synchronized");

    app.listen(port, () => {
      console.log(` Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(" DB Connection or Sync Failed:", err);
  });
