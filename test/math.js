"use strict";
var assert = require('chai').assert;
var expect = require('chai').expect;


// Write a function called sum() that returns the sum of 2 numbers
// continue with divide(), multiply() and subtract()

describe('Math', function() {
    it('adds', function() {
        //given
        function sum(a, b) {
            return a + b
        };
        //when
        var a = 5
        var b = 10
        //then
        expect(a + b).to.equal(15);
    });
    it('divides', function() {
        //given
        function divide(a, b) {
            return a / b
        };
        //when
        var a = 50
        var b = 10
        //then
        expect(a / b).to.equal(5);
    });
    it('subtracts', function() {
        //given
        function divide(a, b) {
            return a - b
        };
        //when
        var a = 50
        var b = 10
        //then
        expect(a - b).to.equal(40);
    });
    it('multiplies', function() {
        //given
        function multiply(a, b) {
            return a * b
        };
        //when
        var a = 5
        var b = 10
        //then
        expect(a * b).to.equal(50);
    });
})

// Write a function called summation() that returns the sum of all numbers in an array of numbers
describe('sum of all numbers in an array', function(){
  it('sumsarr', function(){
    //given
    function summation(arr) {
        var total = 0;
        for (var i = 0; i <= arr.length - 1; i++) {
            total += arr[i];
        }
        return total
    };
    //when
    var numbers = [1,2,3,4,5,6,7,8,9];
    var newarr = summation(numbers);
    //then
    expect(newarr).to.equal(45);
  })
})

// Write a function sum_recursive() that sums all numbers in the provided list of lists (of lists of lists)

// function sum_recursive()

// Write a function Greatest Common Denominator named gcd() using Euclides algorithm that returns an integer
// ​
// Write a function that takes a string that replaces all occurrence of a number character [0...9] to be `1337`
