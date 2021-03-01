import React, {useState, useEffect} from 'react';
import List from '../components/List';
import SearchBox from '../components/SearchBox'
import Results from '../components/Results';
import PointToArea from '../helpers/PointToArea';
import apiKeys from '../assets/ApiKeys';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const api = require("@what3words/api");

const key = apiKeys.threeWords.key;
api.setOptions({ key: key });



const SearchContainer = () => {


    // CodeClan coordinates: "serve.sweep.kicked"
    // const [flightsFound, setFlightsFound] = useState(null);

    const searchBoxSize = 20;

    const [searchCoords, setSearchCoords] = useState(null);
    const [flights, setFlights] = useState(null);
    const [selectedFlight, setFlight] = useState(null);
    const [locationWords, setLocationWords] = useState(null);


    useEffect(() => {
       getFlights(); 
    }, [searchCoords]);

///////////////////////////////////////////////////////////////////////////

    function threeWordsToCoords(searchString) {
        console.log("key used:", key);

        api.convertToCoordinates(searchString)
        // .then(data => console.log("returned from 3W:", data));
        .then(data => setSearchCoords(data));
    };


    function coordsToThreeWords(coordObj) {
        console.log("key used:", key);

        api.convertTo3wa(coordObj)
        .then(data => setLocationWords(data));
    };
////////////////////////////////////////////////////////////////////////////


    const getFlights = () => {
        console.log("Fetching API...");
        if (searchCoords)
        {
            console.log("coords point:", searchCoords);
            console.log("from 3W lat", searchCoords.coordinates.lat);

            const pointLat = searchCoords.coordinates.lat;
            const pointLon = searchCoords.coordinates.lng;

            console.log("lat is", pointLat)
            console.log("long is", pointLon)

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
            <>
            <List flights={flights} onFlightClick={() => {handleFlightClick()}} />
            
            <MapContainer center={[searchCoords.coordinates.lat, searchCoords.coordinates.lng]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[searchCoords.coordinates.lat, searchCoords.coordinates.lng]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                    
            </MapContainer>
            </>
        );
    }
    else
    {
        return (
            <>
                    <SearchBox searchFlight={newSearch}></SearchBox>
                    <MapContainer center={[55.865, -4.2578]} zoom={9} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[55.865, -4.2578]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>
                </>
        );
    }
    



}



export default SearchContainer;