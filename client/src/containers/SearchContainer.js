import React, {useState, useEffect} from 'react';
import List from '../components/List';
import SearchBox from '../components/SearchBox'
import Results from '../components/Results';
import PointToArea from '../helpers/PointToArea';
import apiKeys from '../assets/ApiKeys';
const api = require("@what3words/api");

const key = apiKeys.threeWords.key;
api.setOptions({ key: key });



const SearchContainer = () => {


    // CodeClan coordinates: "serve.sweep.kicked"

    const searchBoxSize = 20;

    const [searchCoords, setSearchCoords] = useState(null);
    const [flights, setFlights] = useState(null);
    const [selectedFlight, setFlight] = useState(null);
    const [flightFurtherInfo, setFlightFurtherInfo] = useState(null);
    const [locationWords, setLocationWords] = useState(null);


    useEffect(() => {
       getFlights(); 
    }, [searchCoords]);

    useEffect(() => {
        getFlightData();
    },[selectedFlight]);



    // Following two functions interface with what 3 words API
    function threeWordsToCoords(searchString) {
        // console.log("key used:", key);
        api.convertToCoordinates(searchString)
        .then(data => setSearchCoords(data));
    };

    function coordsToThreeWords(coordObj) {
        // console.log("key used:", key);
        api.convertTo3wa(coordObj)
        .then(data => setLocationWords(data));
    };

    const getFlightData = () =>
    {
        if (selectedFlight)
        {
            console.log("Getting further data for:", selectedFlight)

        }
    };

    const getFlights = () => {
        console.log("Fetching API...");
        if (searchCoords)
        {
            console.log("coords point:", searchCoords);
            console.log("from 3W lat", searchCoords.coordinates.lat);

            const pointLat = searchCoords.coordinates.lat;
            const pointLon = searchCoords.coordinates.lng;

            const coordsBox = PointToArea(
                {
                lat: pointLat,
                lon: pointLon
                }, searchBoxSize);
            
            console.log("this is the box:",coordsBox);

            fetch(`https://opensky-network.org/api/states/all?lamin=${coordsBox.minLat}&lomin=${coordsBox.minLon}&lamax=${coordsBox.maxLat}&lomax=${coordsBox.maxLon}`)
            .then(res => res.json())
            .then(data => setFlights(data))
        }
    }


    const handleFlightClick = (selectedFlight) => {
        setFlight(selectedFlight)
    }

    // handleSearch()
    const newSearch = (something) => {
        console.log("search is:", something.search)
        threeWordsToCoords(something.search);
        getFlights();
    }
    

    if (selectedFlight)
    {
        return (
            <Results selectedFlight={selectedFlight} />
        );
    }

    else if (flights)
    {
        return (
            <List flights={flights} onFlightClick={(clickedFlight) => {handleFlightClick(clickedFlight)}} />
        );
    }
    else
    {
        return (
                <SearchBox searchFlight={newSearch}></SearchBox>
        );
    }
    



}

export default SearchContainer;