# 🌦️ Weather Analytics Application

A secure weather analytics application that retrieves real-time weather data, computes a custom Comfort Index, and displays ranked city insights.

---

## 📌 Objective

The goal of this backend service is to:
- Fetch weather data from the **OpenWeather API**
- Calculate a custom **Comfort Index** on the server
- Rank cities based on comfort level
- Improve performance using **server-side caching**
- Secure access using **Auth0 authentication** (via frontend)

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **TypeScript**
- **Axios**
- **OpenWeather API**
- **In-memory caching**
- **Auth0 (via frontend integration)**

### Frontend
- React (basic responsive UI)

### Authentication
- Auth0 (Login, Logout, MFA)

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash

git clone <https://github.com/malishaperera/fidenz-weather-backend>
cd weather-analytics-app

2. Install dependencies
npm install

3. Create .env file in project root
OPEN_WEATHER_API_KEY=your_openweather_api_key

4. Start the backend server
npm run dev

Server will start on:
http://localhost:3000
```

## 🌍 Weather Data Retrieval

- City codes are read from a cities.json file.

- A minimum of 10 cities are processed.

- Weather data is fetched from OpenWeather API using city IDs.

- All data fetching is handled on the backend.

## 🧮 Comfort Index Calculation
#### The Comfort Index is a custom score ranging from 0 to 100, calculated on the backend using the following parameters:

- Temperature

- Humidity

- Wind Speed

- Formula Logic (Simplified)

- Ideal temperature range is considered around 22–26°C.

- Higher humidity reduces comfort.

- Moderate wind speed improves comfort.

- Each factor is weighted to produce a final score between 0 and 100.

## 📐 Formula Logic (Simplified)

- Ideal temperature range: 22°C – 26°C

- Higher humidity → lower comfort

- Moderate wind speed → higher comfort

- Each parameter is weighted to produce a normalized score between 0 and 100

### 🤔 Why This Formula?

- Simple and easy to explain

- Suitable for comparing multiple cities

- Avoids unnecessary scientific complexity

- Focuses on real-world user comfort

## 📊 Ranking Logic
- Cities are ranked from:
Most Comfortable → Least Comfortable

- Sorting is done in descending order of Comfort Index

- Ranking is calculated on the backend

Example:
````
{
"rank": 1,
"city": "Sydney",
"temperature": 24.6,
"comfortIndex": 72,
"description": "clear sky"
}
````
## ☁️ Weather Description

- Weather descriptions such as:

- clear sky

- light rain

- overcast clouds

- Retrieved from the OpenWeather API

- Returned to frontend as part of the API response

## ⚡ Server-Side Caching

- Implemented using in-memory cache

- Cache duration: 5 minutes (TTL)

- Prevents unnecessary API calls

- Improves performance and reduces latency

### Cache Behavior

- First request → CACHE MISS

- Subsequent requests (within 5 minutes) → CACHE HIT
