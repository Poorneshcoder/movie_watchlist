const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{type: String, required:true},
    description:{type:String, required:true},
    releaseYear:{type:Number},
    genre:{type:String, required:true},
    watched:{type:Boolean, default:false},
    rating:{type:Number, min:1, max:5},
    review:{type:String},
});

module.exports = mongoose.model("Movie", movieSchema);

