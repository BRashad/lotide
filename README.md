# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brashad/lotide`

**Require it:**

`const _ = require('@brashad/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function assertArraysEqual()`: assert that arays are equal
* `function assertEqual(...)`: assert that arguments given are equal
* `function assertObjectsEqual(...)`: assert that objects are equal
* `function countLetters(...)`: count of redundant/repetitive letters in a given string
* `function countOnly(...)`: count qty of similar letters in a string
* `function eqArrays(...)`: validates equality of arrays
* `function eqObjects(...)`: validates equality of objects
* `function findKey(...)`: searches specific key of an object
* `function findKeyByValue(...)`: search key by value
* `function head(...)`: returns first item of an array
* `function letterPositions(...)`: description to be provided
* `function loopyLighthouse(...)`: description to be provided
* `function map(...)`: description to be provided 
* `function middle(...)`: returns the middle items of an array
* `function pig-latin(...)`: flips the words based on famous logical game pig latin. ref: 'https://en.wikipedia.org/wiki/Pig_Latin'
* `function raisin(...)`: returns not matching elemnts from an array
* `function reverse(...)`: reverses any string given
* `function tail(...)`: returns last element
* `function takeUntil(...)`: description to be provided
* `function without(...)`: description to be provided 