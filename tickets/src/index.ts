import mongoose from "mongoose"
import { app } from "./app"
import { natsWrapper } from "../nats-wrapper"

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error("JWT_KEY must be defined")
    }

    if (!process.env.MONGO_URL) {
        throw new Error("MONGO_URL must be defined")
    }

    try {
        await natsWrapper.connect('ticketing', 'alsdkj', 'http://nats-srv:4222');
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("Connected to MongoDb")
    } catch (err) {
        console.error(err)
    }

    app.listen(3000, () => {
        console.log("Listening on port 3000!!!!!!!!")
    })
}

start()
