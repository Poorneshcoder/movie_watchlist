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
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={4}
          required
        ></textarea>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          placeholder="Release Year"
          required
        />
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
          required
        />
        <button className='bg-black text-white p-2 m-2 rounded hover:bg-teal-950' type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddEditMovie;
