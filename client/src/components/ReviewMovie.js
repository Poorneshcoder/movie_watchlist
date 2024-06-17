import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewMovie } from '../actions/movieActions';

const ReviewMovie = ({ movie }) => {
  const [review, setReview] = useState(movie.review || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reviewMovie(movie._id, review));
    setReview('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Review:
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </label>
      <button className='bg-black text-white p-2 m-2' type="submit">Submit</button>
    </form>
  );
};

export default ReviewMovie;

