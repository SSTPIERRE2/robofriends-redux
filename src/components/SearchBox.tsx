import React from 'react';
import { ChangeSearchFieldAction } from '../constants';

interface Props {
    searchChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => ChangeSearchFieldAction;
}

const SearchBox = ({ searchChange }: Props) => {
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
