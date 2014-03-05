/*global describe, beforeEach, it */

var assert  = require("assert");

describe("Chapter 6 - Arrays (pseudo arrays)", function () {
    it("length property expected behavior", function () {
        var arr = ["one", "two"];
        assert.equal(2, arr.length);
    });
    it("length property weird behavior", function () {
        var arr = ["one", "two"];
        arr[500] = "three";
        console.log("length should be 3 but is: " + arr.length);
    });
});