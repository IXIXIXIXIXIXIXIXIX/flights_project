
const CalculateLengthLonDegree = function (latitude, lengthEquatorialDegree) {

    let magLatRadians;
    // Length of 1 degree of Longitude = cosine (latitude in decimal degrees) * length of degree (miles) at equator.

    // Account for latitudes in Southern Hemisphere
    if (latitude < 0)
    {
        magLatRadians = (latitude * -1) * (Math.PI / 180);
    }
    else if (latitude > 0)
    {
        magLatRadians = latitude * (Math.PI /180);
    }
    else
    {
        // If latitude is equatorial, all directions are a great circle, so all degrees are same length
        return lengthEquatorialDegree;
    }
    return (Math.cos(magLatRadians) * lengthEquatorialDegree);
};


module.exports = CalculateLengthLonDegree;