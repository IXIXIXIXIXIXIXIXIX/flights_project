const CalculateLengthLonDegree = require('./CalculateLengthLonDegree.js');

const PointToArea = function(pointCoords, sidelengthOfSquare) {

    // Assume earth is perfect sphere and there are 69 nautical miles per degree of latitude
    const lengthDegreeLatitude = 69;
    const lengthDegreeLongitude = CalculateLengthLonDegree(pointCoords.lat, lengthDegreeLatitude);
    const offsetMiles = sidelengthOfSquare / 2;

    const offsetLatDegrees = (1 / lengthDegreeLatitude) * offsetMiles;
    const maxLat = pointCoords.lat + offsetLatDegrees;
    const minLat = pointCoords.lat - offsetLatDegrees;

    const offsetLonDegrees = (1 / lengthDegreeLongitude) * offsetMiles;
    const maxLon = pointCoords.lon + offsetLonDegrees;
    const minLon = pointCoords.lon - offsetLonDegrees;

    return {
        maxLat : maxLat,
        minLat: minLat,
        maxLon: maxLon,
        minLon: minLon
    };
};

module.exports = PointToArea;