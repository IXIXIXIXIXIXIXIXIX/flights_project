import React from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import OriginPanel from './OriginPanel';
import DestinationPanel from './DestinationPanel';

const Results = ({selectedFlight, furtherFlightInfo, originAirport, destination}) => {

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
            {/* <DestinationPanel destination={destination} /> */}
            <FlightDetailsPanel selectedFlight={selectedFlight} />
            <OriginPanel originAirport={originAirport} />
        </div>
    );
};

export default Results;