import React, {useState, useEffect} from 'react';
import SearchBox from '../ components/SearchBox';
import apiKeys from '../assets/ApiKeys';
const api = require("@what3words/api");




            
const key = apiKeys.threeWords.key;
api.setOptions({ key: key });



const SearchContainer = () => {


    const [flightsFound, setFlightsFound] = useState(null);
    const [selectedFlight, setFlight] = useState(null);
    const [searchCoords, setSearchCoords] = useState(null); //TS 
    const [locationWords, setLocationWords] = useState(null);


    // Currently useEffect is only used to stop infinite loops when testing 3w to coords function
    useEffect(() => {
        // CodeClan coordinates
        //threeWordsToCoords("serve.sweep.kicked");
        setSearchCoords(
            {                              
                {
                    "country": "GB",
                    "square": {
                        "southwest": {
                            "lng": -0.195543,
                            "lat": 51.520833
                        },
                        "northeast": {
                            "lng": -0.195499,
                            "lat": 51.52086
                        }
                    },
                    "nearestPlace": "Bayswater, London",
                    "coordinates": {
                        "lng": -0.195521,
                        "lat": 51.520847
                    },
                    "words": "filled.count.soap",
                    "language": "en",
                    "map": "https://w3w.co/filled.count.soap"
                }

        );
    }, []);

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

    const newSearch = (something) => {
        console.log("search is:", something)

        threeWordsToCoords(something)
    }
    
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

        return (
            <div>
                <SearchBox searchFlight={newSearch}></SearchBox>
            </div>
        );
    }
    

}

export default SearchContainer;