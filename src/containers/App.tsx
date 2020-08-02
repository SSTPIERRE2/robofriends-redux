import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage/MainPage';
import { apiCall } from '../api/api';
import { AnyAction } from 'redux';
import { AppState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { Robot } from '../types';
import {
    ChangeSearchFieldAction,
    RequestRobotsSuccessAction,
    RequestRobotsFailedAction,
} from '../constants';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state: AppState) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
    };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots(apiCall)),
    };
};

export interface AppProps {
    searchField: string;
    robots: Robot[];
    isPending: boolean;
    onSearchChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => ChangeSearchFieldAction;
    onRequestRobots: () => Promise<
        RequestRobotsSuccessAction | RequestRobotsFailedAction
    >;
}

class App extends Component<AppProps> {
    render() {
        return <MainPage {...this.props} />;
    }
}

// const connector = connect(mapStateToProps, mapDispatchToProps);
// action done from mapDispatchToProps will change state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connector(App);
