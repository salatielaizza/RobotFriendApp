import React from 'react';
import RobotCard from './RobotCard' 

const CardList = ( {robots} ) => {

    const robotCardArray = robots.map( (user, index) => {
        return (
            <RobotCard 
            keyIndex = {index}
            id={robots[index].id} 
            name={robots[index].name} 
            email={robots[index].email}
        />)
    }) 

    return (
            <div>
                {robotCardArray}
            </div>
        );
}

export default CardList;