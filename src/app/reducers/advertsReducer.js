
import * as types from "../action_types";


export default (state = {}, action) => {

    switch (action.type) {
        case types.GET_ADVERTISEMENTS_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case types.GET_ADVERTISEMENTS_FAILURE:
        default:
            return state;
    }
}

