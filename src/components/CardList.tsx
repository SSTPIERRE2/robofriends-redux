import React from 'react';
import Card from './Card';
import { Robot } from '../types';

interface Props {
    robots: Robott[];
}

const CardList = ({ robots = [] }: Props): JSX.Element => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
