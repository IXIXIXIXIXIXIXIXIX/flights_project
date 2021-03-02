import React from 'react';

const FlightDetailsPanel = ({selectedFlight, handlePlayer1Choice, handlePlayer2Choice, player1, player2}) => {

    const missing = "Undisclosed";

    const processedFlightInfo = selectedFlight.map((element) => {

        if (element === "" || element === null)
        {
            return missing;
        }
        else
        {
            return element;
        }

    });

    // Convert Last contacted to human-readable
    let t = new Date(processedFlightInfo[4] * 1000);
    const lastContact = t.toLocaleString();

    let verticalRate = processedFlightInfo[11];

    if (processedFlightInfo[11] !== missing)
    {
        if (processedFlightInfo[11] > 0)
        {
            verticalRate = `ascending at ${processedFlightInfo[11]}m/s`;
        }
        else if (processedFlightInfo[11] < 0)
        {
            verticalRate = `descending at ${processedFlightInfo[11] * -1}m/s`;
        }
        else
        {
            verticalRate = "level";
        }
    }
    else
    {
        verticalRate = "level";
    }

    return (
            <div className="result-box position-box transparent-box in-from-bottom">
                <div className="results-skyrabble-heading">
                    <div className="skyrabble-button-container">
                        <span className="player-button" onClick={()=>handlePlayer1Choice(selectedFlight)}>
                            <i className="fas fa-plane"></i> 1</span>
                        <span className="player-button" onClick={()=>handlePlayer2Choice(selectedFlight)}>
                            <i className="fas fa-plane"></i> 2</span>
                    </div>
                    </div>
                <div className="result-main-head">Callsign: <span className="result-content">{processedFlightInfo[1]}</span></div>
                <div className="result-secondary-head">ICAO Transponder Code: <span className="result-content">{processedFlightInfo[0]}</span></div>
                <div className="result-item">Aircraft Origin: <span className="result-content">{processedFlightInfo[2]}</span></div>
                <div className="result-item">Location:</div>
                <div className="result-item">Latitude: <span className="result-content">{processedFlightInfo[6]}</span></div>
                <div className="result-item">Longitude: <span className="result-content"> {processedFlightInfo[5]}</span></div>
                <div className="result-item">Velocity: <span className="result-content"></span>{processedFlightInfo[9] === missing ? missing : `${processedFlightInfo[9]}m/s`}</div>
                <div className="result-item">Altitude: <span className="result-content"></span>{processedFlightInfo[13]}</div>
                <div className="result-item">Vertical Rate: <span className="result-content"></span>{verticalRate}</div>
                <div className="result-item">Last Contact: <span className="result-content"></span>{lastContact}</div>
            </div>
    );
};

export default FlightDetailsPanel;