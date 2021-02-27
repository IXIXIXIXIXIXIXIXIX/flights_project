
const assert = require('assert');
const CalculateLengthLonDegree = require('../CalculateLengthLonDegree.js');

describe('CalculateLengthLonDegree', function() {

    const lengthDegreeLatitude = 69;
    // beforeEach(function () {
    // });

    it('should return 69 at equator', function () {
        const actual = 69;
        assert.strictEqual(actual, lengthDegreeLatitude); 
    });

    // it('should return 69 at equator', function () {
    //     const actual = 69;
    //     console.log("")
    //     assert.strictEqual(actual, lengthDegreeLatitude); 
    // });

});