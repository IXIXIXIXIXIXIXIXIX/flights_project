import React from 'react';

const OriginPanel = ({originAirport}) => {


    if (originAirport)
    {
        return (

                <div className="result-box origin-box transparent-box in-from-left">
                    <h4>Origin: {originAirport.name}</h4>
                </div>
        );
    }
    else
    {
        return(
                <div className="result-box origin-box transparent-box in-from-left">
            <h4>Origin: Undisclosed</h4>
            </div>
        )
    }

};

export default OriginPanel;