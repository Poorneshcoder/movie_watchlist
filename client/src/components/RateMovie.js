import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rateMovie } from '../actions/movieActions';

const RateMovie = ({ movie }) => {
  const [rating, setRating] = useState(movie.rating || 0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(rateMovie(movie._id, rating));
    setRating('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </label>
      <button className='bg-black text-white p-2 m-2' type="submit">Submit</button>
    </form>
  );
};

export default RateMovie;

