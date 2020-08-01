import React, { FunctionComponent } from 'react';

const Scroll: FunctionComponent = (props) => {
    return (
        <div
            style={{
                overflow: 'scroll',
                border: '5px solid black',
                height: '800px',
            }}
        >
            {props.children}
        </div>
    );
};

export default Scroll;
