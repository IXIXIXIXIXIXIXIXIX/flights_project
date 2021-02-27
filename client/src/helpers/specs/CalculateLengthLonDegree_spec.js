const assert = require('assert');
const CalculateLengthLonDegree = require('../CalculateLengthLonDegree.js');

describe('CalculateLengthLonDegree', function() {

    const lengthDegreeLatitude = 69;

    it('should return 69 at equator', function () {
        const actual = 69;
        assert.strictEqual(actual, CalculateLengthLonDegree(0, lengthDegreeLatitude)); 
    });

    it('should return a positive value given positive input', function () {
        const result = CalculateLengthLonDegree(45, lengthDegreeLatitude) > 0;
        const actual = true;
        assert.strictEqual(actual, result);
    });

    it('should return a positive value given negative input', function () {
        const result = CalculateLengthLonDegree(-45, lengthDegreeLatitude) > 0;
        console.log("45 result:", result);
        const actual = true;
        assert.strictEqual(actual, result);
    });
});