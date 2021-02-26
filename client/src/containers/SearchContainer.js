import React, {useState, useEffect} from 'react';
import threeWordsToCoords from '../helpers/ThreeWordsToCoords';


const SearchContainer = () => {

    const testCoords = threeWordsToCoords("filled", "count", "spreading");

    const [flightsFound, setFlightsFound] = useState(null);
    const [selectedFlight, setFlight] = useState(null);

    const getFlights = () => {
        fetch("https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226")
        .then(res => res.json())
        .then(data => setFlightsFound(data))
    }

    useEffect(() => {
        getFlights()
    }, [])

    const handleSelectedFlight = (selectedFlight) => {
        setFlight(selectedFlight)
    }

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