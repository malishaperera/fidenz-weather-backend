import cities from "../cities.json";
import { fetchWeatherByCityId } from "../external/openWeather.client";
import { calculateComfortIndex } from "./comfortIndex.service";
import {getCache,setCache} from "../cache/memory.cache";

const CACHE_KEY = "WEATHER_WITH_COMFORT";

export const getWeatherWithComfortIndex = async () => {
    const cached = getCache(CACHE_KEY);
    if (cached) {
        console.log("CACHE HIT");
        return cached;
    }

    console.log("CACHE MISS");

    const results: any[] = [];

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
            description: weather.weather[0].description,
        });
    }

    //Sort by comfort index
    results.sort((a, b) => b.comfortIndex - a.comfortIndex);

    //Add ranking
    const rankedResults = results.map((item, index) => ({
        rank: index + 1,
        ...item,
    }));

    //SAVE TO CACHE
    setCache(CACHE_KEY, rankedResults);

    return rankedResults;
};
