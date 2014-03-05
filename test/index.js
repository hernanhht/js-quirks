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
        assert.equal(arr.length, 501);
        //console.log("length should be 3 but is: " + arr.length); //501
    });
    it("delete an element (The wrong way)", function () {
        var arr = ["one", "two"];
        delete arr[1];
        assert.equal(arr.length, 2);
        //console.log("length should be 1 but is: " + arr.length); //2
    });
    it("delete an element (The right way)", function () {
        var arr = ["one", "two", "three"];
        arr.splice(2, 1); //Removes one element from index 2 (should delete 'three')
        assert.equal(arr.length, 2);
        assert.equal(arr[0], "one");
        assert.equal(arr[1], "two");
    });
});