import React, { Component } from 'react';

interface Props {
    children?: React.ReactNode;
}

class ErrorBoundary extends Component<Props, { hasError: boolean }> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(): void {
        this.setState({ hasError: true });
    }

    render(): JSX.Element | React.ReactNode {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
