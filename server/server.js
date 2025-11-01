import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// app config
const app = express();
const port = process.env.PORT || 5001;

connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Arup");
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})