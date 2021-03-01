import React from 'react';

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
            return <div className="list-box transparent-box in-from-right"><h3 onClick={() => {onFlightClick(flight)}}>Flight Number:</h3>{flight[0]}<h3>Flying to:</h3>{flight[2]}</div>
        })

        return (
            <div className="main-list-row">
                {flightFullDetails}
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