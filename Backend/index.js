require('dotenv').config({ path: './passwords.env' });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { userRouter } = require('./routes/user')
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("./xtorrent/v1/user",userRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.liste(PORT);
    console.log(`Listening to port ${PORT}`);
}
 