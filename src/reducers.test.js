import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';
import * as reducers from './reducers';
import { setSearchField } from './actions';

describe('searchRobots', () => {
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({
            searchField: '',
        });
    });

    it('should update state with change_searchField action', () => {
        expect(reducers.searchRobots({}, setSearchField('test'))).toEqual({
            searchField: 'test',
        });
    });
});

describe('requestRobots', () => {
    const initialState = reducers.initialStateRobots;
    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
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
                payload: robots,
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
