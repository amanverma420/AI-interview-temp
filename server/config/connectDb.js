import mongoose from "mongoose"
import dns from "dns"

dns.setServers(["8.8.8.8", "8.8.4.4"])

const connectDb = async () => {
    try {
        const uri = process.env.MONGODB_URL || process.env.MONGO_URL
        if (!uri) throw new Error("MongoDB connection string is not defined in environment variables.")
        await mongoose.connect(uri)
        console.log("DataBase Connected")
    } catch (error) {
        console.log(`DataBase Error ${error}`)
    }
}

export default connectDb