import "dotenv/config";
import express from "express";
import cors from "cors";
import { getWeatherData } from "./api/weather.controller";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/weather", getWeatherData);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
