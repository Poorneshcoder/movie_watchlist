import axios from 'axios';

import {
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  RATE_MOVIE,
  REVIEW_MOVIE,
} from './actionTypes';

// Fetch movies
export const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('https://movie-watchlist-kbdd.onrender.com');
    dispatch({ type: 'GET_MOVIES', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// Add movie
export const addMovie = (movie) => async (dispatch) => {
  try {
    const response = await axios.post('https://movie-watchlist-kbdd.onrender.com', movie);
    dispatch({ type: ADD_MOVIE, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// Update movie
export const updateMovie = (id, updatedMovie) => async (dispatch) => {
  try {
    const response = await axios.put(`https://movie-watchlist-kbdd.onrender.com/${id}`, updatedMovie);
    dispatch({ type: UPDATE_MOVIE, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// Delete movie
export const deleteMovie = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://movie-watchlist-kbdd.onrender.com/${id}`);
    dispatch({ type: DELETE_MOVIE, payload: id });
  } catch (error) {
    console.error(error);
  }
};

// Rate movie
export const rateMovie = (id, rating) => async (dispatch) => {
  try {
    const response = await axios.put(`https://movie-watchlist-kbdd.onrender.com/${id}/rate`, { rating });
    dispatch({ type: RATE_MOVIE, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// Review movie
export const reviewMovie = (id, review) => async (dispatch) => {
  try {
    const response = await axios.put(`https://movie-watchlist-kbdd.onrender.com/${id}/review`, { review });
    dispatch({ type: REVIEW_MOVIE, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};


// Example action creator (in movieActions.js)
export const toggleWatched = (id, watched) => async (dispatch) => {
  try {
    const res = await axios.put(`https://movie-watchlist-kbdd.onrender.com/${id}`, { watched });
    dispatch({
      type: 'TOGGLE_WATCHED',
      payload: { id, watched: res.data.watched }
    });
  } catch (err) {
    console.error(err);
    // Handle error (dispatch error action or show error message)
  }
};

