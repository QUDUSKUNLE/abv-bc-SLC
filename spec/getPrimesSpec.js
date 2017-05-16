const getPrimes = require("../prime.js");

describe(" getPrimes ", function() {

    it("should return prime numbers of positive integer between 0 to 5.", function() {
        expect(getPrimes(5)).toEqual([2, 3]);
    });

    it("should return prime numbers [2, 3, 5, 7, 11, 13, 17, 19] between 0 to 20.", function() {
        expect(getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it("should return prime numbers [2, 3, 5, 7] between 0 to 10.", function() {
        expect(getPrimes(10)).toEqual([2, 3, 5, 7]);
    });

});

describe(" getPrimes ", function() {

    it("should return false if input is 0.", function() {
        expect(getPrimes(0)).toEqual("Invalid Input");
    });

    it("should return 'Wrong input' if the input is an Array", function() {
        expect(getPrimes([1])).toBe(false);
    });
    it("should return input can not be a string.", function() {
        expect(getPrimes("string")).toEqual(false);
    });

    it("should return input should be positive integer.", function() {
        expect(getPrimes(-1)).toEqual(false);
    });

    it("should return type of getPrimes(n)", function() {
        expect(typeof getPrimes(20)).toBeTruthy();
    });

    it("should return false if an Object is passed in", function() {
        expect(getPrimes({})).toBe(false);
    });
    it("should return No input provided if input is undefined", function() {
        expect(getPrimes()).toBe("No input provided");
    });

});