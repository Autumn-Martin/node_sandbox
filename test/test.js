// tests using mocha functions: describe(), context(), and it()
describe("Something that I'm describing", function() {
  context("That thing under some context", function() {
    it("does a thing", function() {

    });
  });
});

describe("Something that I'm describing with ES6 arrow functions ", () => {
  context("That thing under some context with ES6 arrow functions", () => {
    it("does a thing with ES6 arrow functions", () => {

    });
  });
});

// test using built in Node based assertions
assert = require('assert'); // assert is a Node module that is not pre-loaded, so we must require it

it("can assert true", function() {
  assert(true, 'TRUE IS FALSE! UP IS DOWN! DAY IS NIGHT!');
});

it("can assert true ES6 arrow version", () => {
  assert(true, 'TRUE IS FALSE! UP IS DOWN! DAY IS NIGHT!');
});

// test using Chai, an assertion library for JavaScript
assert = require('chai').assert;

it("can assert true", function(){
  assert(true, 'TRUE IS FALSE! UP IS DOWN! DAY IS NIGHT!');
});

describe("Chai Assertions Sandbox", function(){
  it("can assert true", function(){
    assert(true);
  });

  it("can assert 1 is 1", function(){
    assert.equal(1,1);
  });

  it("can assert 2 is not 3", function(){
    assert.notEqual(2,3);
  })

  it("can assert that something is a given data type", function(){
    assert.isNumber(42);
    assert.isObject({answer: 42});
    assert.isArray([1,2,3,4]);
    var thingIHaventDefined;
    assert.isUndefined(thingIHaventDefined);
  });
});

describe("Chai Assertions Sandbox ES6 arrow version", () => {
  it("can assert true", () => { assert(true); });
  it("can assert 1 is 1", () => { assert.equal(1,1); });
  it("can assert 2 is not 3", () => { assert.notEqual(2,3); });
  it("can assert that something is a given data type", () => {
    assert.isNumber(42);
    assert.isObject({anser: 42});
    assert.isArray([1,2,3,4]);
    var thingIHaventDefined;
    assert.isUndefined(thingIHaventDefined);
  });
});

// comparing arrays

it("can can compare two arrays taht contain the same values", function()
{
  var actualArray = [1,2,3,4];
  assert.deepEqual(actualArray,
  [1,2,3,4]);
})

it("can compare two objects that contain the same key/value pairs", function() {
  var actualObject = {name: "Nate", module: 4};
  assert.deepEqual(actualObject, {name: "Nate", module: 4});
})
