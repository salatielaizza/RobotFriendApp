import React from 'react';

const RobotCard = ({email, id, name, username, website, company, phone}) => {
    return (
        <div className='tc dib br3 ma2 dib bw2 pa3 bg-light-blue grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200` }/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{phone}</p>
                <p>{website}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default RobotCard;