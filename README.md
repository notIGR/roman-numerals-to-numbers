# roman-numerals-to-numbers
Objective - Complete the function `decodeRoman()` found in `script.js` that takes in a string of Roman numerals and returns a valid integer
Not familiar with roman numerals? See [background](#background) section below

## Getting started

  #### Fork & clone repo
  ```bash
  git clone ...
  [...]
  cd roman-numerals-to-numbers
  ```
  
  #### Install dependencies (Jest for testing)
  ```bash
  npm install
  ```
  
  #### Edit script.js
  ```bash
  code script.js
  ```
  
  #### Add your solution code to `decodeRoman()`
  ```js
  const decodeRoman = s => {
    // Code goes here
    // return the solution
  }
  ```
  

## How to run tests?
  + All tests - `npm run tests`
  + Basic criteria - `npm run basic`
  + Intermediate criteria - `npm run intermediate`
  + Advanced criteria - `npm run advanced`
  + Expert criteria - `npm run expert` OR `npm run tests`

## Test criteria

### Guarantees
  - s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
  - s is a valid Roman numeral between 1 and 3999

### BASIC VERSION REQS
 - Return correct values for Roman numerals not involving subtraction
 - No need to handle (IV - 4, IX - 9, etc)

### INTERMEDIATE VERSION REQS
 - All the basic reqs +
 - If string is empty, return 0

### ADVANCED VERSION REQS
 - Reqs from intermediate, basic +
 - Handle any and all cases within the above guarantees,
 - including subtraction such as IV (4), XL (40), CM (400)

### EXPERT VERSION REQS
 - Everything in advanced version +
 - make it case insensitive
 - (iV should return 4, XxVIi should return 27)
 - and invalid roman numerals - invalid should return -1
 - ("FakeNumeral" should return -1)

## Background
`hint - skip this if you already are familiar`

Roman numerals have seven different symbols to represent them

|Symbol    |   Value|
-----------|--------
|I         |    1|
|V         |    5|
|X         |    10|
|L         |    50|
|C         |    100|
|D         |    500|
|M         |    1000|

### Examples
|Symbol | Value|
--------|-------
|V      | 5    |
|XV     | 15   |
|XX     | 20   |
|XXVVII | 27   |
|MD     | 1500 |

As seen above, numbers that require multiple digits are typically written with the smaller numbers last
However,

I (1) can be placed before V (5) and X (10) to make 4 and 9 - IV, IX

X (10) can be placed before L (50) and C (100) to make 40 and 90 - XL, XC

C (100) can be placed before D (500) and M (1000) to make 400 and 900 - CD, CM

