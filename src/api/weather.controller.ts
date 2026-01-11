import { Request, Response } from "express";
import { getWeatherWithComfortIndex } from "../application/weather.service";
import { getCacheStatus } from "../cache/memory.cache";

export const getWeatherData = async (req: Request, res: Response) => {
    try {
        console.log("Fetching weather data with comfort index");
        const data = await getWeatherWithComfortIndex();
        res.json(data);
    } catch (error) {
        console.error("WEATHER ERROR", error);
        res.status(500).json({ message: "Failed to fetch weather data" });
    }
};

export const getCacheDebug = (req: Request, res: Response) => {
    res.json({
        cache: getCacheStatus("WEATHER_WITH_COMFORT"),
    });
};
