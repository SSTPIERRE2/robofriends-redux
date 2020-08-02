import React, { Component } from 'react';

interface State {
    count: number;
}

class CounterButton extends Component<Record<string, unknown>, State> {
    constructor(props: null) {
        super(props);
        this.state = { count: 1 };
    }

    shouldComponentUpdate(nextProps: null, nextState: State) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <button
                onClick={() =>
                    this.setState((state) => ({ count: state.count + 1 }))
                }
            >
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;
