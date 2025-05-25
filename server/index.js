import dotenv from 'dotenv'
import mongoose from 'mongoose';
import express from 'express'
dotenv.config()
const app = express();

import cors from 'cors'

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
    res.send('Hello World!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// ---------//
import userRouter from './routes/userRoute.js'
app.use('/user',userRouter)

import eventRouter from './routes/eventRoute.js'
app.use('/event',eventRouter)


