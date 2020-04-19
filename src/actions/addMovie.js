export const NEW_MOVIE_NAME = "NEW_MOVIE_NAME";
export const NEW_MOVIE_RATE = "NEW_MOVIE_RATE";

export function newMovieName(e) {
    console.log(e)
    return dispatch => {
        dispatch({
            type: NEW_MOVIE_NAME,
            data: e.target.value
        })
    }
}

export function newMovieRate(e) {
    return dispatch => {
        dispatch({
            type: NEW_MOVIE_RATE,
            data: e.target.value
        })
    }
}