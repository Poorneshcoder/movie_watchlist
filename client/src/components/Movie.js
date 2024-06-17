import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import RateMovie from './RateMovie';
import ReviewMovie from './ReviewMovie';
import { toggleWatched } from '../actions/movieActions';

const Movie = ({ movie, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteMovie(movie._id));
  };
  
  const handleWatchToggle = () => {
    dispatch(toggleWatched(movie._id, !movie.watched));
  };

  const handleEditClick = () => {
    onEdit(movie);
  };

  return (
    <div className='border shadow-sm rounded-lg p-3'>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>{movie.releaseYear}</p>
      <p>{movie.genre}</p>
      <button className='bg-black text-white p-2 m-2' onClick={handleEditClick}>Edit</button>
      <button className='bg-black text-white p-2 m-2' onClick={handleDelete}>Delete</button>
      <RateMovie movie={movie} />
      <ReviewMovie movie={movie} />
      {/* <p>Rating: {movie.rating}</p>
      <p>Review: {movie.review}</p> */}
      <p>Watched: <input type="checkbox" checked={movie.watched} onChange={handleWatchToggle} /></p>
      <hr />
    </div>
  );
};

export default Movie;





