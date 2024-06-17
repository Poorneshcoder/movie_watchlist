const express = require('express');
const router = express.Router();
const movieController = require('../controller/movieController');

// get all movies
router.get('/',movieController.getAllMovies);

// add new movie
router.post('/',movieController.addMovie);

// get a single movie by id
router.get('/:id',movieController.getMoiveById);

// update a movie
router.put('/:id',movieController.updateMovie);

// delete a movie
router.delete('/:id',movieController.deleteMovie);

// rate a movie
router.put('/:id/rate',movieController.rateMovie);

// review a movie
router.put('/:id/review',movieController.reviewMovie);

// toggle button
router.put('/:id/toggle-watched',movieController.toggleButton)




module.exports = router;