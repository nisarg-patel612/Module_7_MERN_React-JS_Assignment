/* Task - 1 Create a React component UserCard that accepts name, age, and location as props
and displays them in a card format. */

import React from "react";
import "./UserCard.css";

const UserCard = (props) => {

    const { name , age , location } = props;

    return(
        <div className="user-card">
            <h1>User Information</h1>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>Age:</strong>{age}</p>
            <p><strong>Location:</strong>{location}</p>
        </div>
    )
}

export default UserCard;