import express from "express";
import cors from "cors";
import tourRoutes from "./routes/tour.js";
import { configDotenv } from "dotenv";
configDotenv();


const PORT = process.env.BACKEND_PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/tours", tourRoutes)

app.get("/", (request, response) => {
  console.log(request);
  return response
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});