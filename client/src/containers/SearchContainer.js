import React, {useState, useEffect} from 'react';
import apiKeys from '../assets/ApiKeys';
const api = require("@what3words/api");



            
const key = apiKeys.threeWords.key;
api.setOptions({ key: key });



const SearchContainer = () => {


    // const [flightsFound, setFlightsFound] = useState(null);
    // const [selectedFlight, setFlight] = useState(null);
    const [searchCoords, setSearchCoords] = useState(null);
    const [locationWords, setLocationWords] = useState(null);


    // Currently useEffect is only used to stop infinite loops when testing 3w to coords function
    // useEffect(() => {
        //CodeClan coordinates
        // threeWordsToCoords("serve.sweep.kicked");
    // }, []);

///////////////////////////////////////////////////////////////////////////

    function threeWordsToCoords(searchString) {
        console.log("key used:", key);

        api.convertToCoordinates(searchString)
        .then(data => setSearchCoords(data));
    };


    function coordsToThreeWords(coordObj) {
        console.log("key used:", key);

        api.convertTo3wa(coordObj)
        .then(data => setLocationWords(data));
    };
////////////////////////////////////////////////////////////////////////////


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
    
    if (searchCoords)
    {
        return (

            // Render List here
            <div>
            <p>Latitude: {searchCoords.coordinates.lat}</p>
            <p>Longitude: {searchCoords.coordinates.lng}</p>
            <p>Nearest: {searchCoords.nearestPlace}</p>

            </div>
        )
    }
    else
    {
        // Render searchbox here
        return (<h1>Search Now!</h1>);
    }
    

}

export default SearchContainer;