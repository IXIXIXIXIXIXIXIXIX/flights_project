import React from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import AirportPanel from './AirportPanel';

const Results = ({selectedFlight, originAirport, destinationAirport, handleBackClick}) => {

    return (

        <>
        <div className="back-button transparent-box in-from-top" onClick={handleBackClick}>
            <h3>Back to Results List</h3>
        </div>

        <div className="main-results-row">
            <AirportPanel airport={destinationAirport} airportLabel="Destination Airport" animationDirection="in-from-right"/>
            <FlightDetailsPanel selectedFlight={selectedFlight} />
            <AirportPanel airport={originAirport} airportLabel="Origin Airport" animationDirection="in-from-left"/>
        </div>
        </>
    );
};

export default Results;