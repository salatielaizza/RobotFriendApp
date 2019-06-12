import React from 'react';
import RobotCard from './RobotCard' 

const CardList = ( {robots} ) => {

    const robotCardArray = robots.map( (user, index) => {
        return (
            <RobotCard 
            key = {index}
            id={robots[index].id} 
            name={robots[index].name} 
            username={robots[index].username}
            phone={robots[index].phone}
            website={robots[index].website}
            email={robots[index].email}
            />
        )
    }) 

    return (
            <div>
                {robotCardArray}
            </div>
        );
}

export default CardList;