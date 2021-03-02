import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const List = ({flights, searchCoords, onFlightClick}) => {

    if (flights)
    {
        console.log("flights", flights);

        const found = [...flights.states];

        console.log("is there any state:", flights.states);
        const flightListDetails = found.map((flight) => {
            return <h3 onClick={() => {onFlightClick(flight)}}>Flight: {flight[0]}<br></br>Flying to {flight[2]}</h3>
        })

        const flightFullDetails = found.map((flight, index) => {
            return <div className="list-box transparent-box in-from-left" key={index} onClick={() => {onFlightClick(flight)}}><h4>Flight Number:</h4>{flight[0]}<h4>Flying to:</h4>{flight[2]}</div>
        })

        const markerNodes = found.map((flight) => {
            
            let flightName;

            if (flight[1])
            {
                flightName = flight[1];
            }
            else
            {
                flightName = flight[0];
            }

            return (
                    <Marker position={[flight[6], flight[5]]} key={flightName}>
                    <Popup onClick={() => {onFlightClick(flight)}}>
                        You are looking at {flightName}. <br />
                    </Popup>
                    </Marker>
            )
        })

        // const flightName = found.map((flight) => {
        //     return <p>{flight[0]}</p>
        // })


        return (
            <div className="list_page">
            <div className="main-list-row scrollbar">
                <h3>Flight list</h3>
                {flightFullDetails}
                
            </div>
            <div className="map_styling">
                <h3> Map View</h3>
                <br></br>
                <MapContainer center={[searchCoords.coordinates.lat, searchCoords.coordinates.lng]} zoom={10} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markerNodes}
                    {/* <Marker position={[51.5074, 0.1278]}>
                    <Popup>
                        Flight One. <br />
                    </Popup>
                    </Marker> */}
                </MapContainer>
            </div>
            </div>
        )
    }
    if (!flights)
    {
        return (
            <div className="instructions transparent-box in-from-left">
                <h2>On the bright side, the sky is clear. On the other hand, there's nothing to see!</h2>
                <p>Unfortunately we couldn't find any flights in your area.</p>
                <p>Try searching again</p>
          </div>
        );
    }
    else
    {
        return (
            <h2>loading...</h2>
        );
    }
}
export default List;