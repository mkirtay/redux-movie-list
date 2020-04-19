import { SET_FILTER } from '../actions/filterActions';

const initialState = {type: 'all'};

export const filterOptions = (state = initialState, action) => {
    switch (action.type){
        case SET_FILTER: {
            return{
                ...state,
                type: action.payload.type
            }
        }
        default:
            return state
    }
};