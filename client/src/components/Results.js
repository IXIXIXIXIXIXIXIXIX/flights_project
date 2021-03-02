import React from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import AirportPanel from './AirportPanel';

const Results = ({selectedFlight, furtherFlightInfo, originAirport, destinationAirport}) => {

    return (

        <div className="main-results-row">
            <AirportPanel airport={destinationAirport} airportLabel="Destination Airport" animationDirection="in-from-right"/>
            <FlightDetailsPanel selectedFlight={selectedFlight} />
            <AirportPanel airport={originAirport} airportLabel="Origin Airport" animationDirection="in-from-left"/>
        </div>
    );
};

export default Results;