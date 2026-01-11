import axios from "axios";

const API_KEY = process.env.OPEN_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherByCityId = async (cityId: number) => {
    const response = await axios.get(BASE_URL, {
        params: {
            id: cityId,
            appid: API_KEY,
            units: "metric",
        },
    });

    return response.data;
};
