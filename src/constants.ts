import { Robot } from './types';

export const CHANGE_SEARCHFIELD = 'CHANGE_SEARCHFIELD';
export type CHANGE_SEARCHFIELD = typeof CHANGE_SEARCHFIELD;

export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export type REQUEST_ROBOTS_PENDING = typeof REQUEST_ROBOTS_PENDING;
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export type REQUEST_ROBOTS_SUCCESS = typeof REQUEST_ROBOTS_SUCCESS;
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';
export type REQUEST_ROBOTS_FAILED = typeof REQUEST_ROBOTS_FAILED;

export interface ChangeSearchFieldAction {
    type: CHANGE_SEARCHFIELD;
    payload: string;
}

export interface RequestRobotsPendingAction {
    type: REQUEST_ROBOTS_PENDING;
}

export interface RequestRobotsSuccessAction {
    type: REQUEST_ROBOTS_SUCCESS;
    payload: Robot[];
}

export interface RequestRobotsFailedAction {
    type: REQUEST_ROBOTS_FAILED;
    payload: Error;
}
