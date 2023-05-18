import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { calculateCarValueController } from "./controllers/controller";

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for calculating car value
app.post("/calculateCarValue", calculateCarValueController);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
