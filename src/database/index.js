import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import cors from 'cors';

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

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