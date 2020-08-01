import React, { Component } from 'react';
import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import ErrorBoundry from '../ErrorBoundry';
import './mainPage.css';
import Header from '../Header';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () =>
        this.props.robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(this.props.searchField.toLowerCase());
        });

    render() {
        const { onSearchChange, isPending } = this.props;

        return (
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {isPending ? (
                        <h1>Loading</h1>
                    ) : (
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots()} />
                        </ErrorBoundry>
                    )}
                </Scroll>
            </div>
        );
    }
}

export default MainPage;
