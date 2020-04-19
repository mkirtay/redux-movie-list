import { INCREASE_POINT, DECREASE_POINT } from "../actions/rateActions";
import { NEW_MOVIE_NAME } from "../actions/addMovie";
import { DELETE_ROW } from "../actions/deleteRow";
import { SORT_ITEMS } from "../actions/sortingAction";
import { moviesList } from "../data/moviesList";

const initialState = moviesList;

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_POINT:
    case INCREASE_POINT: {
      const movies = state.map((movie) => {
        if (movie.id === action.payload.movie.id) {
          movie.rate = action.payload.movie.rate;
        }
        return movie;
      });

      return movies;
    }

    case DELETE_ROW: {
        const movies = state.map((movieList) => {
            return movieList;
        });
        return movies;
    }

    case SORT_ITEMS: {
        return action.payload.newList
    }

    case NEW_MOVIE_NAME:
      console.log(action.data);
      return state;
    default:
      return state;
  }
};
