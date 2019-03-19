import React from 'react';

const RobotCard = ({email, id, name}) => {
    return (
        <div className='tc br3 ma2 dib pa3 bg-light-blue grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200` }/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default RobotCard;