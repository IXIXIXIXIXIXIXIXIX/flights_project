const assert = require('assert');
const PointToArea = require('../PointToArea.js');

describe('PointToArea', function() {

    const inputCoord = {
        lat: 45,
        lon: 45
    };

    const codeClanCoords = {
        lat: 55.8727168,
        lon: -4.2696704
    };

    const inputSideLength = 20;
    const result = PointToArea(inputCoord, inputSideLength);

    const CCresult = PointToArea(codeClanCoords, inputSideLength); 
    console.log("result box", CCresult);


    it('should return an object with a member called maxLon', function() {
        const actual = true;
        assert.strictEqual(actual, (result.maxLon != null));
    });

    it('should return an object with a member called minLon', function() {
        const actual = true;
        assert.strictEqual(actual, (result.minLon != null));
    });
    
    it('should return an object with a member called maxLat', function() {
        const actual = true;
        assert.strictEqual(actual, (result.maxLat != null));
    });
    
    it('should return an object with a member called minLat', function() {
        const actual = true;
        assert.strictEqual(actual, (result.minLat != null));
    });

});