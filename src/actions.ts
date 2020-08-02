// import { apiCall } from "./api/api";
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';
import { Dispatch, AnyAction } from 'redux';
import { Robot } from './types';

export const setSearchField = (text: string) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text,
});

// Make sure to return the fetch/apiCall so testing thunks works
export const requestRobots = (apiCall: (link: string) => Promise<Robot[]>) => (
    dispatch: Dispatch<AnyAction>
) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    return apiCall('https://jsonplaceholder.typicode.com/users')
        .then((data) => {
            dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
        })
        .catch((error) => {
            dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
        });
};
