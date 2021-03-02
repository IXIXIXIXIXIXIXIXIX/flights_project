import React from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import OriginPanel from './OriginPanel';
import DestinationPanel from './DestinationPanel';

const Results = ({selectedFlight, furtherFlightInfo, origin, destination}) => {

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
            {/* <OriginPanel origin={origin} /> */}
            <FlightDetailsPanel selectedFlight={selectedFlight} />
            {/* <DestinationPanel destination={destination} /> */}
        </div>
    );
};

export default Results;