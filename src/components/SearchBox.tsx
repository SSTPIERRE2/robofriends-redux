import React from 'react';
import { ChangeSearchFieldAction } from '../constants';

interface Props {
    searchChange: (
        event: React.SyntheticEvent<HTMLInputElement>
    ) => ChangeSearchFieldAction;
}

const SearchBox: React.FC<Props> = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                aria-label="Search Robots"
                name="searchBox"
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
