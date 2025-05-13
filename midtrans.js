import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import snapRoute from "./routes/midtrans-route.js";

dotenv.config();

const app = express();
const port = process.env.VITE_PORT || 3200;

app.use(cors);
app.use(express.json());

app.use('/api/midtrans-snap/', snapRoute);

const message = () => {
        console.log("Server midtrans berjalan di port " + port);
}

// app.listen(port, message);

export default app;