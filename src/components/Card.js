import React from 'react';

const Card = (props) => {
    const { name, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/set3/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;