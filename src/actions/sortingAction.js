import * as _ from 'lodash';
export const SORT_ITEMS = "SORT_ITEMS";


export const sortItems = (key, orderType) => (dispatch, getState) => {
    try {
        const { entities } = getState();
        const newList = _.orderBy(entities.movies, [ key ], [ orderType ]);

        dispatch({
            type: SORT_ITEMS,
            payload: {
                newList
            }
        })

    } catch(error) {
        console.log("error: ", error);
    }
};