require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const cors = require('cors');
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


