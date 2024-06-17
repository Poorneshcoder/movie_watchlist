const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

// import routers
const movieRoutes = require('./routes/movieRoutes')

// create app express
const app = express();

// middlewars

app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: 'https://movie-watchlist-iota-one.vercel.app'
}));

// routes
app.use('/api/movies',movieRoutes)

// connect to mongodb
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log('database connected')).catch((e)=>console.log(e));


app.listen(3045,()=>{
    console.log('server running on port');
})
