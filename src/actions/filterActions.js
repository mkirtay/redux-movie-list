export const SET_FILTER = "SET_FILTER";

export const setFilter = ( type ) => (dispatch) => {
    try {
        dispatch({
            type: SET_FILTER,
            payload: {
                type
            }
        })

    } catch(error) {
        console.log("error: ", error);
    }
};
