import axios from 'axios';
import * as types from '../action_types';
import * as constants from '../constants';

export const AdvertsSuccessAction = (data) => {
    return {
        type: types.GET_ADVERTISEMENTS_SUCCESS,
        data: data
    };
};

export const fetchAdvertsFromAPI = (source) => {
    return (dispatch) => {
        return axios.get(`/v1/advertisements`)
            .then(response => {
                dispatch(AdvertsSuccessAction(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};



