import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
dotenv.config()
connectDb() // Establish DB connection at startup

import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app = express()

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        const cleanOrigin = origin.trim().replace(/\/$/, "");
        const allowedOrigins = [
            "http://localhost:5173",
            "http://localhost:3000",
            process.env.FRONTEND_URL
        ].filter(Boolean).map(url => url.trim().replace(/\/$/, ""));

        if (allowedOrigins.includes(cleanOrigin)) {
            return callback(null, true);
        }

        // Auto-whitelist Vercel preview/production domains starting with 'ai-interview-client'
        if (cleanOrigin.startsWith("https://ai-interview-client") && cleanOrigin.endsWith(".vercel.app")) {
            return callback(null, true);
        }

        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

// Start express server only if not running inside a serverless handler (like Vercel)
if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 6000
    app.listen(PORT , ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}

export default app

