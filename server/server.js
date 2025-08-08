import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import listingRoute from './routes/listing.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("MongoDB connected"))
    .catch(err => console.log("Mongodb error", err));

app.use("/listings", listingRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server connected to ${PORT}`);
})
