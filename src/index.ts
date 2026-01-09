import "dotenv/config";
import express from "express";
// import {connectDB} from "./infrastructure/db";

import cors from "cors";


const server = express();

server.use(
    cors({
        origin: [
            "http://localhost:5173",
        ],
        credentials: true,
    })
);

// server.use(loggerMiddleware);

server.use(express.json());

// server.use("/api/weather", weatherRouter);

// connectDB();


const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
