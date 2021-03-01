import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const List = ({flights, onFlightClick}) => {

    if (flights)
    {
        console.log("flights", flights);

        const found = [...flights.states];

        console.log("is there any state:", flights.states);
        const flightListDetails = found.map((flight) => {
            return <h3 onClick={() => {onFlightClick(flight)}}>Flight: {flight[0]}<br></br>Flying to {flight[2]}</h3>
        })

        const flightFullDetails = found.map((flight) => {
            return <div className="list-box transparent-box in-from-right" onClick={() => {onFlightClick(flight)}}><h3>Flight Number:</h3>{flight[0]}<h3>Flying to:</h3>{flight[2]}</div>
        })

        const flightCoord = found.map((flight) => {
            return {lat: flight[6], lng: flight[5]}
        })

        const flightName = found.map((flight) => {
            return <p>{flight[0]}</p>
        })


        return (
            <div className="main-list-row">
                {flightFullDetails}
                <h2> Map View</h2>
                <br></br>
                <MapContainer center={[51.5074, 0.1278]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={flightCoord}>
                    <Popup>
                        You are looking at {flightName}. <br />
                    </Popup>
                    </Marker>
                    <Marker position={[51.5074, 0.1278]}>
                    <Popup>
                        Flight One. <br />
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
    else
    {
        return (
            <h2>loading...</h2>
        );
    }
}
export default List;