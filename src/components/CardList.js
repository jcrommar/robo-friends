import React from 'react';
import Card from './Card';

const CardList = ({ Robots }) => {
    //if (true) {
    //    throw new Error('Noooooo!')
    //}
    const cardComponent = Robots.map((user, i) => {
        return <Card 
        key={i} 
        id={Robots[i].id} 
        name={Robots[i].name} 
        username={Robots[i].username} 
        version={Robots[i].version}
        price={Robots[i].price}
        />
    })
    return (
        <div>
           {cardComponent}
        </div>
    );
}

export default CardList;