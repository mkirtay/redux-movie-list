import { combineReducers } from "redux";

import { movies } from "./moviesReducer";
import { filterOptions } from "./filterReducer";

const entities = combineReducers({
  movies,
  //comments,
  //....
});

export default combineReducers({
    entities,
    filterOptions
    //buraya filter.options diye koy
  //wallets,
  //authInfo
});
