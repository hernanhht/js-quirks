/*global describe, beforeEach, it */

var assert  = require("assert");

describe("JavaScript The Good Parts", function () {
    "use strict";

    describe("Chapter 3 - Objects", function () {
        it("Obtaining the Object Literal's prototype", function () {
            var obj = {
                value: 0
            };
            assert.ok(obj);
            assert.ok(Object.getPrototypeOf(obj));
            assert.equal(Object.prototype, Object.getPrototypeOf(obj));
        });
        it("Obtaining ths Object's prototype (created by a Constructor invocation)", function () {
            //This form of instantion is dangerous, because the Object property
            //In the Global Object may be overriden and this could cause an error
            var obj = new Object();
            obj.value = 0;

            assert.ok(obj);
            assert.ok(Object.getPrototypeOf(obj));
            assert.equal(Object.prototype, Object.getPrototypeOf(obj));
        });
        it("Object created by a Create factory setting prototype to null", function () {
            var obj = Object.create(null); //null will be the prototype
            obj.value = 0;

            assert.ok(obj);
            assert.ok(!Object.getPrototypeOf(obj));
        });
        it("Object created by a Create factory method with a prototype", function () {
            var baseObject = {name: "base"},
                obj = Object.create(baseObject); //null will be the prototype
            obj.value = 0;

            assert.ok(obj);
            assert.ok(Object.getPrototypeOf(obj));
            assert.equal(Object.getPrototypeOf(obj), baseObject);
        });
    });
    describe("Chapter 4 - Functions", function () {
        it("Method invocation", function () {
            var o = {
                value: 0,
                increment: function (inc) {
                    this.value += inc;
                }
            };
            assert.equal(0, o.value);
            o.increment(3); //the 'this' variable is bounded to the 'o' object
            o.increment(7);
            assert.equal(10, o.value);
        });

        it("Function invocation unbounded", function () {
            var myObject = {
                value: 0,
                increment: function (inc) {
                    this.value += inc;
                },
                getValue: function () {
                    return this.value;
                }
            },
                getter = myObject.getValue;

            assert.equal(0, myObject.value);
            myObject.increment(3); //the 'this' variable is bounded to the 'o' object
            myObject.increment(7);
            assert.equal(10, myObject.value);

            //'this' is not bounded to myObject. If we use 'strict mode', 'this' will
            //be undefined. If we don't use 'strict mode', 'this' will be bounded
            //to the global object
            //So, invoking 'getter' will throw a TypeError (in 'strict mode') 
            assert.throws(function () {
                getter();
            });
        });
        it("Constructor invocation", function () {
            var MyObjectConstructor = function () {
                //When we invoke this function as a constructor
                //the 'this' variable is bounded to the new object just created
                this.status = "ready";
            },

                obj = new MyObjectConstructor();

            assert.equal(obj.status, "ready");
        });
    });

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
});