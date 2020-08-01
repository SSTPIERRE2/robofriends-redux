import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import MainPage from './MainPage';

const robots = [{ name: 'Bill' }, { name: 'Ted' }, { name: 'Elon' }];

describe('App', () => {
    let wrapper;
    const sandbox = sinon.createSandbox();

    beforeEach(() => {
        sandbox.spy(MainPage.prototype, 'componentDidMount');
        const mockProps = {
            onRequestRobots: jest.fn(),
            searchField: '',
            robots: [],
            isPending: false,
        };

        wrapper = shallow(<MainPage {...mockProps} />);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('renders MainPage without crashing', () => {
        expect(wrapper).toMatchSnapshot();
        expect(MainPage.prototype.componentDidMount).toHaveProperty(
            'callCount',
            1
        );
        expect(wrapper.instance().props.onRequestRobots).toHaveBeenCalled();
    });

    it('filters robots correctly', () => {
        const mockProps = {
            robots,
            searchField: 'Elon',
        };
        wrapper.setProps(mockProps);
        expect(wrapper.instance().filterRobots()).toEqual([{ name: 'Elon' }]);
        wrapper.setProps({ robots: robots.slice(0, 1) });
        expect(wrapper.instance().filterRobots()).toEqual([]);
    });

    it('should render a loading indicator', () => {
        const mockProps = {
            isPending: true,
        };
        wrapper.setProps(mockProps);
        expect(wrapper.contains(<h1>Loading</h1>)).toBe(true);
    });
});
