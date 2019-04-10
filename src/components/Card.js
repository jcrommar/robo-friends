import React from 'react';

const Card = ({name, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ba'>
            <img alt='robots' src={`https://robohash.org/${id}?size=300x300`} />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;