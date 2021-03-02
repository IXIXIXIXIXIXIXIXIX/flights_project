import React from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import AirportPanel from './AirportPanel';

const Results = ({selectedFlight, furtherFlightInfo, originAirport, destinationAirport}) => {

    // const panels = [];

    // if (origin)
    // {
    //     panels.push(<OriginPanel origin={origin} />);
    // }

    // panels.push(<FlightDetailsPanel selectedFlight={selectedFlight} />);

    // if (destination)
    // {
    //     panels.push(<DestinationPanel destination={destination} />);
    // }
    
    return (

        <div className="main-results-row">
            <AirportPanel airport={destinationAirport} airportLabel="Destination Airport" />
            <FlightDetailsPanel selectedFlight={selectedFlight} />
            <AirportPanel airport={originAirport} airportLabel="Origin Airport" />
        </div>
    );
};

export default Results;