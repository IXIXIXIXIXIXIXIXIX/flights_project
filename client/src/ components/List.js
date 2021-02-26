import React from 'react';

const List = ({flights, onFlightClick}) => {
    
    const flightList = flightsFound.map((flight) => {
        return <tr onClick={() => {onFlightClick(flight)}}>
        <td>{flight.callsign}</td>
        <td>{flight.origin_country}</td>
      </tr>
    })
}


return (
    <div className="flight-list-table">
        <table style="width:50%">
            <tr>
            <th>Flight Number</th>
            <th>Origin Country</th>
            </tr>
            {flightList}
        </table>
    </div>
)

export default List;