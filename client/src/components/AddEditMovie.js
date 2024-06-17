// AddEditMovie.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../actions/movieActions';

const AddEditMovie = ({ movie, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: movie ? movie.title : '',
    description: movie ? movie.description : '',
    releaseYear: movie ? movie.releaseYear : '',
    genre: movie ? movie.genre : '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateMovie(movie._id, formData));
    onClose(); // Close the form after submitting
  };

  return (
    <div>
      <h2>{movie ? 'Edit Movie' : 'Add Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={4}
          required
        ></textarea>
        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          placeholder="Release Year"
          required
        />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddEditMovie;
