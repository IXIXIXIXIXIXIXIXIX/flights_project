import React from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import AirportPanel from './AirportPanel';

const Results = ({selectedFlight, originAirport, destinationAirport, handleBackClick, 
    handlePlayer1Choice, handlePlayer2Choice, player1, player2, player1Words, player2Words}) => {

    return (

        <>
        <div className="back-button transparent-box in-from-top" onClick={handleBackClick}>
            <h3>Back to Results List</h3>
        </div>

        <div className="main-results-row">
            <AirportPanel airport={destinationAirport} airportLabel="Destination Airport" animationDirection="in-from-right"
                player1={player1} player2={player2}/>
            <FlightDetailsPanel selectedFlight={selectedFlight} 
                handlePlayer1Choice={(flight)=>{handlePlayer1Choice(flight)}}
                handlePlayer2Choice={(flight)=>{handlePlayer2Choice(flight)}}/>
            <AirportPanel airport={originAirport} airportLabel="Origin Airport" animationDirection="in-from-left"/>
        </div>
        </>
    );
};

export default Results;