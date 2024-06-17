import {
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  RATE_MOVIE,
  REVIEW_MOVIE,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [action.payload, ...state.movies],
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case RATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    case REVIEW_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    case 'TOGGLE_WATCHED':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie._id === action.payload.id ? { ...movie, watched: action.payload.watched } : movie
        )
      };
    default:
      return state;
  }
};

export default movieReducer;
