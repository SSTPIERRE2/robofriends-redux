import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    ChangeSearchFieldAction,
    RequestRobotsPendingAction,
    RequestRobotsSuccessAction,
    RequestRobotsFailedAction,
} from './constants';
import { Robot } from './types';

export interface AppState {
    searchRobots: SearchRobots;
    requestRobots: RequestRobots;
}

export interface SearchRobots {
    searchField: string;
}

const initialStateSearch: SearchRobots = {
    searchField: '',
};

export const searchRobots = (
    state = initialStateSearch,
    action: ChangeSearchFieldAction
) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};

export interface RequestRobots {
    robots: Robot[];
    isPending: boolean;
    error: boolean;
}

export const initialStateRobots: RequestRobots = {
    robots: [],
    isPending: true,
    error: false,
};

export const requestRobots = (
    state = initialStateRobots,
    action:
        | RequestRobotsPendingAction
        | RequestRobotsSuccessAction
        | RequestRobotsFailedAction
) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {
                robots: action.payload,
                isPending: false,
            });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload });
        default:
            return state;
    }
};
