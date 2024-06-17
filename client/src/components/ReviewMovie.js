// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { reviewMovie } from '../actions/movieActions';

// const ReviewMovie = ({ movie }) => {
//   const [review, setReview] = useState(movie.review || '');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(reviewMovie(movie._id, review));
//     setReview('')
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Review:
//         <textarea
//           className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//         />
//       </label>
//       <button className='bg-black text-white p-2 m-2 rounded hover:bg-teal-950' type="submit">Submit</button>
//     </form>
//   );
// };

// export default ReviewMovie;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewMovie } from '../actions/movieActions';

const ReviewMovie = ({ movie }) => {
  const [review, setReview] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reviewMovie(movie._id, review));
    setReview(''); // Clear the review input field after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <label className="block text-sm font-medium text-gray-700">Review:</label>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-black text-white p-2 m-2 rounded hover:bg-teal-950">Submit</button>
    </form>
  );
};

export default ReviewMovie;
