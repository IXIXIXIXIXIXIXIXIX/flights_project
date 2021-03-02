import React from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import AirportPanel from './AirportPanel';

const Results = ({selectedFlight, originAirport, destinationAirport, handleBackClick, 
    handlePlayer1Choice, handlePlayer2Choice, player1, player2, player1Words, player2Words}) => {

    let gameLink = [];

    if (player1Words && player2Words)
    {
        gameLink.push(
            <div className="back-button in-from-top" onClick={handleBackClick}>
            <h3>PLAY SKYRABBLE!</h3>
            </div>
        );
    }

    return (
        <>
        <div className="results-controls">
        <div className="back-button in-from-top" onClick={handleBackClick}>
            <h3>Back to Results List</h3>
        </div>
        {gameLink}
        </div>
        <div className="main-results-row">
            <AirportPanel airport={destinationAirport} airportLabel="Destination Airport" animationDirection="in-from-right"/>
            <FlightDetailsPanel selectedFlight={selectedFlight} 
                handlePlayer1Choice={(flight)=>{handlePlayer1Choice(flight)}}
                handlePlayer2Choice={(flight)=>{handlePlayer2Choice(flight)}} player1={player1} player2={player2}/>
            <AirportPanel airport={originAirport} airportLabel="Origin Airport" animationDirection="in-from-left"/>
        </div>
        </>
    );
};

export default Results;