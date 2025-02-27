import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/routes";
import mongoose from "mongoose";
import { productModel } from "./models/models";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB as string;

app.get("/", async ( request: Request, response: Response) => {

  
  response.status(200).json({ status: "OK", message: "Estado ok" });
});

app.use(router)

mongoose.connect(DB_URI, {
  dbName: "tienda"
}).then(() => {
  console.log('Connection success');

  app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  }).on("error", (error) => {
    throw new Error(error.message);
  });
})
  .catch(error => {
    console.error('Connection fail', error);
  });