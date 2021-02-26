import apiKeys from '../assets/ApiKeys';

function threeWordsToCoords(wordOne, wordTwo, wordThree) {

    const key = apiKeys.threeWords.key;
    console.log("key used:", key);
    const searchString = `https://api.what3words.com/v3/convert-to-coordinates?words=${wordOne}.${wordTwo}.${wordThree}&key=${key}`;
    const coords = { lng: null, lat: null, country: null, placeName: null, map: null};

    fetch(searchString)
    .then(res => res.json())
    .then((data) => {

        console.log("returned:", data);
        coords.lng = data.coordinates.lng;
        coords.lat = data.coordinates.lat;
        coords.country = data.country;
        coords.placeName = data.nearestPlace;
        coords.map = data.map;
    })
    
    
    return coords;
};

export default threeWordsToCoords;


