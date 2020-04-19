export const INCREASE_POINT = "INCREASE_POINT";
export const DECREASE_POINT = "DECREASE_POINT";

export const increasePoint = (movieId) => (dispatch, getState) => {
  try {
    // getState() fonksiyonu su anki statei getirir
    const { entities } = getState();
    //statedeki movie -> statedeki idsi bizim UI da istedigimiz filme esit olanı array icerisinde donduk
    const movie = entities.movies.filter((movie) => movie.id === movieId)[0];

    dispatch({
      type: INCREASE_POINT,
      payload: {
        movie: {
          ...movie,
          rate: movie.rate + 1,
        },
      },
    });
  } catch (error) {
    console.log("error: ", error);
  }
};

export const decreasePoint = (movieId) => (dispatch, getState) => {
  try {
    const { entities } = getState();
    const movie = entities.movies.filter((movie) => movie.id === movieId)[0];

    dispatch({
      type: DECREASE_POINT,
      payload: {
        movie: {
          ...movie,
          rate: movie.rate > 0 ? movie.rate - 1 : movie.rate,
        },
      },
    });
  } catch (error) {
    console.log("error: ", error);
  }
};
