import cities from "../cities.json";
import { fetchWeatherByCityId } from "../external/openWeather.client";
import { calculateComfortIndex } from "./comfortIndex.service";
import {getCache} from "../cache/memory.cache";
type WeatherResult = {
    city: string;
    temperature: number;
    comfortIndex: number;
};

const CACHE_KEY = "WEATHER_WITH_COMFORT";

export const getWeatherWithComfortIndex = async (): Promise<WeatherResult[]> => {
    const cached = getCache(CACHE_KEY);
    if (cached) {
        return cached;
    }
    const results: WeatherResult[] = [];

    for (const city of cities.List) {
        const weather = await fetchWeatherByCityId(Number(city.CityCode));

        const comfortIndex = calculateComfortIndex({
            temperature: weather.main.temp,
            humidity: weather.main.humidity,
            windSpeed: weather.wind.speed,
        });

        results.push({
            city: weather.name,
            temperature: weather.main.temp,
            comfortIndex,
        });
    }

    return results;
};
