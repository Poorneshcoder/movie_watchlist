const Movie = require('../model/movieSchema');

// get all movies
exports.getAllMovies = async(req,res)=>{
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

// add a new movie

exports.addMovie = async(req,res)=> {
    const movie = new Movie(req.body);
    try {
        const newMovie =await movie.save();
        res.status(201).json(newMovie)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

// get a single movie
exports.getMoiveById = async(req,res)=>{
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie == null){
            return res.status(404).json({message:"Movie not found"});
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// update a movie

exports.updateMovie = async(req,res)=>{
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(updatedMovie == null){
            return res.status(404).json({message: "Movie not found"})
        }
        res.json(updatedMovie);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

// delete a movie
exports.deleteMovie = async(req,res)=>{
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie==null){
            return res.status(404).json({message:"Movie not found"});
        }
        await movie.deleteOne();
        res.json({message:"Movie Deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// Existing routes

// Rate movie
 exports.rateMovie = async (req, res) => {
    const { id } = req.params;
    const { rating } = req.body;
    try {
      const movie = await Movie.findByIdAndUpdate(
        id,
        { rating },
        { new: true }
      );
      res.json(movie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Review movie
  exports.reviewMovie =  async (req, res) => {
    const { id } = req.params;
    const { review } = req.body;
    try {
      const movie = await Movie.findByIdAndUpdate(
        id,
        { review },
        { new: true }
      );
      res.json(movie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Assuming you have a route like this in your server
   exports.toggleButton =  async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await Movie.findById(id);
      movie.watched = req.body.watched;
      await movie.save();
      res.json(movie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  