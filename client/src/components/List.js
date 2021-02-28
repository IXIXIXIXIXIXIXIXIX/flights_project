import React from 'react';

const List = ({flights, onFlightClick}) => {

    if (flights)
    {
        console.log("flights", flights);

        const found = [...flights.states];

        console.log("is there any state:", flights.states);
        const flightListDetails = found.map((flight) => {
            return <p><span onClick={() => {onFlightClick(flight)}}>{flight[0]}</span><br></br>{flight[2]}</p>
        })

        const flightOriginCountry = found.map((flight) => {
            return <p>{flight[2]}</p>
        })

        return (
            <div>
                {flightListDetails}
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