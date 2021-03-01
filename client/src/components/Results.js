import React from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import SearchContainer from './FlightDetailPanel';

const Results = ({selectedFlight, flightFurtherInfo}) => {

    return (

        <div className="main-results-row">
            <FlightDetailsPanel selectedFlight={selectedFlight} flightFurtherInfo = {flightFurtherInfo}/>


        </div>
    );
};

export default Results;