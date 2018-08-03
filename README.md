# @grammer/split-array

<!-- badges -->
[![npm (scoped)](https://img.shields.io/npm/v/@grammer/split-array.svg)](https://github.com/jsdev17/split-array)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@grammer/split-array.svg)](https://www.npmjs.com/package/@grammer/split-array)

<!-- content -->

## About

A small method to split an array in half or at a specified index. Returns object containing two arrays, like so:

```js
{
  first_half: [ ... ],
  second_half: [ ... ]
}
```

Written entirely in vanilla JS with zero dependencies.

## Install

```bash
$ npm install @grammer/split-array
```

## Usage

```js
const splitArray = require('@grammer/split-array');

// Example 1 - Split in half
let arr1 = [1,2,3,4,5,6];
console.log( splitArray(arr1) );
// { first_half: [ 1,2,3 ], second_half: [ 4,5,6 ] }

// Example 2 - Split at given index
let arr2 = [1,2,3,4,5,6,7,8,9];
console.log( splitArray(arr2, 7) );
// { first_half: [ 1,2,3,4,5,6,7 ], second_half: [ 8,9 ] }

// Example 3 - Split in half with odd # of elements
let arr3 = [1,2,3,4,5,6,7];
console.log( splitArray(arr3) );
// { first_half: [ 1,2,3 ], second_half: [ 4,5,6,7 ] }
```
