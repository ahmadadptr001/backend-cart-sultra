import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import snapRoute from "./routes/midtrans-route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.use('/api/midtrans-snap', snapRoute);

const message = () => {
        console.log("Server midtrans berjalan di port " + port);
}


export default app;