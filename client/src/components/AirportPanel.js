import React from 'react';

const AirportPanel = ({airport, airportLabel}) => {

    if (airport)
    {
        return (

                <div className="result-box origin-box transparent-box in-from-left">
                <div className="result-main-head">{airportLabel}: <span className="result-content">{airport.name}</span></div>
                <div className="result-secondary-head">City<span className="result-content">{airport.city}</span></div>
                <div className="result-item">Country: <span className="result-content">{airport.country}</span></div>
                <div className="result-item">Location:</div>
                <div className="result-item">Latitude: <span className="result-content">{airport.lat}</span></div>
                <div className="result-item">Longitude: <span className="result-content"> {airport.long}</span></div>
                <div className="result-item">ICAO code: <span className="result-content">{airport.icao_code}</span></div>
                <div className="result-item">IATA code: <span className="result-content">{airport.iata_code}</span></div>
                </div>
        );
    }
    else
    {
        return(
                <div className="result-box origin-box transparent-box in-from-left">
            <h4>{airportLabel}: Undisclosed</h4>
            </div>
        )
    }

};

export default AirportPanel;