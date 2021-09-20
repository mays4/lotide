# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mays4/lotide`

**Require it:**

`const _ = require('@mays4lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function2(head)`: to get first element in the array
* `function1(tail)`: to get all elements in array exept first
* `function3(middle)`: to get middle elements in the array
* `function3(assertEqual)`: to assert equality of two values
* `function3(assertArraysEqual)`: function to assert two arrays are equal
* `function3(eqArrays)`: function take two arrays and return true of false
* `function3(without)`: function take arrays and items to remove from array
* `function3(eqObjects)`: function take two objects compare them and return true of false 
* `function3(assertObjectsEqual)`: function to assert two objects are equal
* `function3(countOnly)`: function to count in specific condition
* `function3(countLetters)`: function to count Letters in sentence
* `function3(LetterPositions)`: function all indices in sentence
* `function3(findKeyByValue)`: function to search for a key on an object where its value matches a given value
* `function3(map)`: function that  will return a new array based on the results of the callback function
* `function3(findKey)`: function that  return the first key for which the callback returns a truthy value
* `function3(takeUntil)`: function that going until the callback return a truthy value
* `function3(flatten)`: function that flatten array of array to a single array
* `function3(index)`: list all function in object

