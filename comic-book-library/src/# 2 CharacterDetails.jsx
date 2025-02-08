import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams(); // Retrieve the character ID from the route parameters

    return (
        <div>
            <h2>Character Details</h2>
            <p>Details for character with ID: {id}</p>
        </div>
    );
};

export default CharacterDetails;
