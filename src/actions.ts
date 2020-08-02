import {
    CHANGE_SEARCHFIELD,
    ChangeSearchFieldAction,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    RequestRobotsSuccessAction,
    RequestRobotsFailedAction,
} from './constants';
import { Dispatch, AnyAction, ActionCreator } from 'redux';
import { Robot } from './types';
import { ThunkAction } from 'redux-thunk';

export type RobotApiCall = (link: string) => Promise<Robot[]>;

export const setSearchField = (text: string): ChangeSearchFieldAction => ({
    type: CHANGE_SEARCHFIELD,
    payload: text,
});

// Make sure to return the fetch/apiCall so testing thunks works
export const requestRobots: ActionCreator<ThunkAction<
    Promise<RequestRobotsSuccessAction | RequestRobotsFailedAction>,
    Robot[] | any,
    RobotApiCall,
    RequestRobotsSuccessAction | RequestRobotsFailedAction
>> = (apiCall: RobotApiCall) => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    return apiCall('https://jsonplaceholder.typicode.com/users')
        .then((data) =>
            dispatch({
                type: REQUEST_ROBOTS_SUCCESS as REQUEST_ROBOTS_SUCCESS,
                payload: data,
            })
        )
        .catch((error) =>
            dispatch({
                type: REQUEST_ROBOTS_FAILED as REQUEST_ROBOTS_FAILED,
                payload: error,
            })
        );
};
