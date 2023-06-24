# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @blessingdiji/lotide`

**Require it:**

`const _ = require('@blessingdiji/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: this function accepts an array and returns the 1st element in the array
* `tail`: accepts an array and returns the array with the first element removed
* `middle`: accepts an array and returns the middle element(s) as an array
* `countLetters`: accepts a string and returns an object with key-value pairs for each character in the string. it also returns the # of times it occurs in the string
* `countOnly`: accepts array of strings and returns count for a specific subset of the strings. the subset is identified by an object
* `eqArrays`: accepts two arrays and returns true/false based on if they are equal
* `eqObjects`: accepts two objects and returns true/false based on if they are equal
* `findKey`: accepts an object and a callback function, scans the object, then returns first key for which the callback function returns a truthy value
* `findKeyByValue`: accepts an object and a value, scans the object, returns the first key which contains the accepted value
* `flatten`: accepts an array with some elements possibly being an array and returns a single array with no inner arrays. 
* `letterPositions`: accepts a string and returns an object with all of the indices in the string where each character is located
* `map`: accepts an array and a function. creates a new array with the results of calling the provided function on each element in the accepted array
* `takeUntil`: accepts an array and a call back function, runs each array element through the function. returns an array with all the items from the original array until the callback returns a truthy value
* `without`: accepts a source array and an array of items to remove. returns a modified array with removed elements included in the accepted array of items to remove
* `index`: list of all functions in an object
* `assertArraysEqual`: function that asserts if two arrays are equal
* `assertEqual`: function asserts if two values are equal
* `assertObjectsEqual`: function that asserts if two objects are equal

## Test Files
- Test files were created for all functions to confirm functionality as well as organization of tests