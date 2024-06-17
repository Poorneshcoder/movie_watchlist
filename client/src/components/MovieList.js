// MovieList.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Movie from './Movie';
import AddEditMovie from './AddEditMovie';

const MovieList = () => {
  const movies = useSelector(state => state.movies.movies);
  const [editingMovie, setEditingMovie] = useState(null);

  const handleEdit = movie => {
    setEditingMovie(movie);
  };

  const handleClose = () => {
    setEditingMovie(null);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
      {movies && movies.length > 0 ? (
        movies.map(movie => (
          <Movie key={movie._id} movie={movie} onEdit={handleEdit} />
        ))
      ) : (
        <p>No movies found.</p>
      )}
      {editingMovie && <AddEditMovie movie={editingMovie} onClose={handleClose} />}
    </div>
  );
};

export default MovieList;
