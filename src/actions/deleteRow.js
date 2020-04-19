export const DELETE_ROW = "DELETE_ROW";

export const deleteRow = (movieId) => (dispatch, getState) => {
    try {
        const { entities } = getState();
        const movie = entities.movies.filter( (movie) => movie.id === movieId)[0];

        const newList = entities.movies.splice( entities.movies.indexOf(movie), 1);

        dispatch({
            type: DELETE_ROW,
            payload: {
                deletedMovies: {
                    newList
                }
            }
        })

    } catch(error) {
        console.log("error: ", error);
    }
};