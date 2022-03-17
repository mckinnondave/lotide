# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mckinnondave/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element of an array.
* `tail(array)`: returns last element of an array.
* `middle(array)`: returns middle item(s) of an array.
* `assertArraysEqual(arr1, arr2)`: Takes in two arrays and determines if they are equal.
* `assertEqual(actual, expected)`: Takes in two strings and determines if they are equal.
* `eqArrays(arr1, arr2`: Takes in two arrays and will return true if exactly equal or false if not.
* `eqObjects(object1, object2)`: Takes in two objects and returns true or false depending on if they are equal or not.
* `assertObjectsEqual(object1, object2)`: Takes in two objects and will return a string confirming if they are equal or not.
* `countLetters(string)`: returns count of each letter in string.
* `countOnly(allItems, itemsToCount)`: Counts how many of an item that you wish to count exists in an array.
* `findKey(object, callback)`: Takes in an object and a callback. The callback is for the key we wish to find in the object.
* `findKeyByValue(object, value)`: Finds an object's key by its value.
* `letterPositions(string)`: returns the indexes of every character in a string.
* `map(array, callback)`: returns a new array with values changed based on callback.
* `takeUntil(array, callback)`: returns new array with all elements from original up until specified condition.
* `without(source, itemsToRemove)`: returns array without items requested to remove from original array.

