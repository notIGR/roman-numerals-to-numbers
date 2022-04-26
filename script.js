// Complete the function decodeRoman that takes in a
// string of Roman numerals and returns a valid integer

// Background

// Roman numerals have seven different symbols to represent them
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Examples
// V - 5
// XV - 15
// XX - 20
// XXVVII - 27
// MD - 1500

// As seen above, numbers that require multiple digits are written with the smaller numbers
// coming later except in the following cases

// I (1) can be placed before V (5) and X (10) to make 4 and 9.
// X (10) can be placed before L (50) and C (100) to make 40 and 90.
// C (100) can be placed before D (500) and M (1000) to make 400 and 900.

// BASIC VERSION REQS
// For any Roman numeral string that does NOT involve any subtraction
// and meets below guarantees,
// decodeRoman will return the correct value

// ADVANCED VERSION REQS
// Your decodeRoman function can handle any case within the guarantees below,
// including subtraction such as
// such as IV (4), XL (40), CM (400)

// Guarantees
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// s is a valid Roman numeral between 1 and 3999

//
// @param {string} s
//
const decodeRoman = (s) => {
  // return the decoded value
};

// When you want to test this code, use the command
// To view a hint, open hint.js
// To view a hint for the advanced solution, open hint2.js

// Don't touch this line
module.exports = decodeRoman;
