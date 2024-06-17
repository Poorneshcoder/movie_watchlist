import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './actions/movieActions';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie'; // Import the AddMovie component

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>Movie Watchlist</h1>
      <AddMovie /> 
      <hr />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;

