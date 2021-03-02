import React, {useState, useEffect} from 'react';
import List from '../components/List';
import SearchBox from '../components/SearchBox'
import Results from '../components/Results';
import PointToArea from '../helpers/PointToArea';
import apiKeys from '../assets/ApiKeys';
import TestConnection from '../components/TestConnection';

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
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [locationWords, setLocationWords] = useState(null);
    const [flightLat, setFlightLat] = useState(null);
    const [flightLng, setFlightLng] = useState(null);


    useEffect(() => {
       getFlights(); 
    }, [searchCoords]);

    useEffect(() => {
        getFlightData();
    },[selectedFlight]);

    useEffect(() => {
        getAirportInfo();

    }, [flightFurtherInfo]);


    const getAirportInfo = () => {


        // Check for declared origin and destination airports
        if (flightFurtherInfo)
        {
            console.log("reaching the origin check")
            airportLookupOrigin(flightFurtherInfo.estDepartureAirport);
        }
        if (flightFurtherInfo)
        {
            airportLookupDestination(flightFurtherInfo.estArrivalAirport);
        }

    };

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

    const airportLookupOrigin = (icaoCode) => {
        fetch(`http://localhost:5000/api/airport_data/icao_code/${icaoCode}`)
        .then(res => res.json())
        .then(data => setOrigin(data));

    };

    const airportLookupDestination = (icaoCode) => {
        fetch(`http://localhost:5000/api/airport_data/icao_code/${icaoCode}`)
        .then(res => res.json())
        .then(data => setDestination(data));
    };

    const getFlightData = () =>
    {
        if (selectedFlight)
        {
            console.log("Getting further data for:", selectedFlight);

            // Seconds * minutes * hours * days
            const secondsInPast = 60 * 60 * 24 * 10;
            const now = new Date();

            const end = Math.floor(now / 1000);
            const begin = end - secondsInPast;

            const url = `https://opensky-network.org/api/flights/aircraft?icao24=${selectedFlight[0]}&begin=${begin}&end=${end}`;
            const authString = `${apiKeys.openSky.user}:${apiKeys.openSky.pass}`;

            fetch(url, {
                method: 'GET',
                credentials: 'same-origin',
                redirect: 'follow',
                agent: 'null',
                headers: {
                    "Content-Type": "text/plain",
                    'Authorization': 'Basic ' + btoa(authString)
            }
            })
            .then(res => res.json())
            .then((data) => {
                console.log("further data:", data);

                if (data.length > 0)
                {
                    const latest = data.reduce((currentLatest, flight) => currentLatest.firstSeen > flight.firstSeen ? currentLatest : flight);
                    console.log("latest:", latest);
                    setFlightFurtherInfo(latest);
                }
                // else
                // {
                //     setFlightFurtherInfo([]);
                // }
            });
        

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
    };


    // Resets backto list page from results - not full reset
    const handleBackClick = () => {
        setOrigin(null);
        setDestination(null);
        setFlightFurtherInfo(null);
        setFlight(null);
    };
    
    

    if (selectedFlight)
    {
        console.log("detected origin:", origin);
        console.log("detected destination", destination);

        

        return (
            <Results selectedFlight={selectedFlight} flightFurtherInfo={flightFurtherInfo} 
                handleBackClick={handleBackClick} originAirport={origin} destinationAirport={destination}/>
        );
    }

    else if (flights)
    {
        return (
            <>
            <h2>Choose your flight...</h2>
            <List flights={flights} searchCoords={searchCoords} onFlightClick={(clickedFlight) => {handleFlightClick(clickedFlight)}} />
                </>
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