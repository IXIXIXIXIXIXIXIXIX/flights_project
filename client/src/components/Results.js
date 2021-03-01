import React from 'react';

const Results = ({selectedFlight, flightFurtherInfo}) => {

    return (

        <div className="main-results-row">

            <div className="result-box destination-box transparent-box in-from-right">
                <h4>Destination</h4>
            </div>
            <div className="result-box position-box transparent-box in-from-bottom">
                <h4>Position</h4>
            </div>
            <div className="result-box origin-box transparent-box in-from-left">
                <h4>Origin</h4>
            </div>
        </div>
    );
};

export default Results;