import React from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import AirportPanel from './AirportPanel';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Results = ({selectedFlight, originAirport, destinationAirport, handleBackClick, handlePlayer1Choice, handlePlayer2Choice}) => {

    return (

        <>
        <div className="back-button transparent-box in-from-top" onClick={handleBackClick}>
            <h3>Back to Results List</h3>
        </div>

        <div className="main-results-row">
            <AirportPanel airport={destinationAirport} airportLabel="Destination Airport" animationDirection="in-from-right"/>
            <FlightDetailsPanel selectedFlight={selectedFlight} 
                handlePlayer1Choice={(flight)=>{handlePlayer1Choice(flight)}}
                handlePlayer2Choice={(flight)=>{handlePlayer2Choice(flight)}}/>
            <AirportPanel airport={originAirport} airportLabel="Origin Airport" animationDirection="in-from-left"/>
        </div>
        </>
    );
};

export default Results;