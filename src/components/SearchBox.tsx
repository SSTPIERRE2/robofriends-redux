import React from 'react';

interface Props {
    searchChange: () => void;
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
