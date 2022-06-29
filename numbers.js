/**
 * numbers in javascript
 */

// integer literals
/*
255, 0b, 0B, 0xff
all the base numbers included hex, decimals */


// floating point literals
/*
precision is main
1.9, 3.14
javascript considers precision points as many as possible
3.03e23->3.03 x 10 to the power of 23
let billion = 1_000_000_000 // valid! not some browsers supports
*/

// arithmetics
/*
+,=,*, /,%,**(power)
Math.functions
Math.random()
Math.clz32(); tells how many leading zeros are there
no errors for any 1/0 errors in most cases
not overflow and underflow errors are thrown
Number is a class
Number.functions good for CP
all numbers are 64bit floating point numbers
we should parse like Number.parseInt(string number)
Number.parseInt('3a') // 3
 */

let statement1 = .3 - .2
let statement2 = .2 - .1
console.log(statement1 === statement2)// false
