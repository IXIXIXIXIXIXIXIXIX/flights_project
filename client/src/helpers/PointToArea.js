const PointToArea = function(pointCoords, sidelengthOfSquare) {

    // Assume earth is perfect sphere and there are 69 nautical miles per degree of latitude
    const lengthDegreeLatitude = 69;
    const offsetMiles = sidelengthOfSquare / 2;

    const offsetLatDegrees = (1 / lengthDegreeLatitude) * offsetMiles;
    const maxLat = pointCoords.lat + offsetLatDegrees;
    const minLat = pointCoords.lat - offsetLatDegrees;



};

module.exports = PointToArea;