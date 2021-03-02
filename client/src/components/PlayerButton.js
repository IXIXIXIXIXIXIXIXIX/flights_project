import React from 'react';

const PlayerButton = ({playerNumber}) => {

    return (
        <span className="player-button"><i className="fas fa-plane"></i> {playerNumber}</span>
    );
};

export default PlayerButton;