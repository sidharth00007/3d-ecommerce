import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToDb = async () => {
    const connectionUrl = process.env.MONGO_URL;
    mongoose
        .connect(connectionUrl, configOptions)
        .then(() => console.log("Ecommerce database connected successfully!"))
        .catch((err) =>
            console.log(`Getting Error from DB connection ${err.message}`),
        );
}

export default connectToDb