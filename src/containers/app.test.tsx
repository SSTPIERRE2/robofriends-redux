import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';

const mockStore = configureStore([]);

describe('App', () => {
    let store;
    let component: ShallowWrapper;

    beforeEach(() => {
        store = mockStore({
            searchRobots: {
                searchField: '',
            },
            requestRobots: {
                robots: [],
                isPending: false,
            },
        });

        component = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component).toMatchSnapshot();
    });
});
