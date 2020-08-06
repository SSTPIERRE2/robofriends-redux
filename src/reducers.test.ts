import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    ChangeSearchFieldAction,
    RequestRobotsPendingAction,
} from './constants';
import * as reducers from './reducers';
import { setSearchField } from './actions';
import { Robot } from './types';

describe('searchRobots', () => {
    it('should return the initial state', () => {
        expect(
            reducers.searchRobots(undefined, {} as ChangeSearchFieldAction)
        ).toEqual({
            searchField: '',
        });
    });

    it('should update state with change_searchField action', () => {
        expect(
            reducers.searchRobots(
                reducers.initialStateSearch,
                setSearchField('test')
            )
        ).toEqual({
            searchField: 'test',
        });
    });
});

describe('requestRobots', () => {
    const initialState = reducers.initialStateRobots;
    it('should return the initial state', () => {
        expect(
            reducers.requestRobots(undefined, {} as RequestRobotsPendingAction)
        ).toEqual(initialState);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(
            reducers.requestRobots(initialState, {
                type: REQUEST_ROBOTS_PENDING,
            })
        ).toEqual({
            ...initialState,
            isPending: true,
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        const robots = [{ name: 'Ted' }];
        expect(
            reducers.requestRobots(initialState, {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: robots as Robot[],
            })
        ).toEqual({
            ...initialState,
            isPending: false,
            robots,
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        const expected = new Error('Oops');
        expect(
            reducers.requestRobots(initialState, {
                type: REQUEST_ROBOTS_FAILED,
                payload: expected,
            })
        ).toEqual({
            ...initialState,
            error: expected,
        });
    });
});
