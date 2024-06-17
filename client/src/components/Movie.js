import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched } from '../actions/movieActions';
import RateMovie from './RateMovie';
import ReviewMovie from './ReviewMovie';

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
      <h2 className="mt-2 px-4 py-2">Movie Name : <strong>{movie.title}</strong></h2>
      <p className="mt-2 px-4 py-2">Movie Description : {movie.description}</p>
      <p className="mt-2 px-4 py-2">Movie Release Year : {movie.releaseYear}</p>
      <p className="mt-2 px-4 py-2">Movie Genre : {movie.genre}</p>
      <button
        className='bg-black text-white p-2 m-2 rounded hover:bg-teal-950'
        onClick={handleEditClick}
      >
        Edit
      </button>
      <button
        className='bg-black text-white p-2 m-2 rounded hover:bg-teal-950'
        onClick={handleDelete}
      >
        Delete
      </button>
      <div className='mt-2 px-4 py-2 flex justify-between'>
        <RateMovie movie={movie} />
        <ReviewMovie movie={movie} />
      </div>
      <p className="mt-2 px-4 py-2">Rating: {movie.rating || 'No rating yet'}</p>
      <p className="mt-2 px-4 py-2">Review: {movie.review || 'No review yet'}</p>
      <p className="mt-2 px-4 py-2">
        Watched:{' '}
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={handleWatchToggle}
        />
      </p>
      <hr />
    </div>
  );
};

export default Movie;


