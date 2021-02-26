import React, {useState, useEffect} from 'react';
import threeWordsToCoords from '../helpers/ThreeWordsToCoords';


const SearchContainer = () => {

    const testCoords = threeWordsToCoords("filled", "count", "spreading");

    const [flightsFound, setFlightsFound] = useState(null);
    const [selectedFlight, setFlight] = useState(null);

    // handleSearch()
    return (

        <div>
        <p>Latitude: {testCoords.lat}</p>
        <p>Longitude: {testCoords.lng}</p>
        <p>Nearest: {testCoords.nearestPlace}</p>
        </div>
    )
}

export default SearchContainer;