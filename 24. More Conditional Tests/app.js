"use strict";
//Q No 24(More Conditional Test)
// Equality Test (True)
console.log("Equality Test with strings: ", "Banana" === "Banana");
// Equality Test (False)
console.log("Equality Test with strings: ", "Banana" === "banana");
//Inequality Test (True)
console.log("Inequality Test with strings: ", "Banana" != "Apple");
//Inequality Test (False)
console.log("Inequality Test with strings: ", "Apple" != "Apple");
//Lowercase Test (True)
console.log("Lowercase function Test with : ", "FOOTBALL".toLowerCase() === "football");
//Lowercase Test (False)
console.log("Lowercase function Test with : ", "FOOTBALL".toLowerCase() === "FOOTBALL");
//Numerical Test involving Equality (True)
console.log("Equality Test with Numbers: ", 5 === 5);
//Numerical Test involving Equality (False)
console.log("Equality Test with Numbers: ", 5 === 6);
//Numerical Test involving Inequality (True)
console.log("Inequality Test with Numbers: ", 5 != 6);
//Numerical Test involving Inequality (False)
console.log("Inequality Test with Numbers: ", 5 != 5);
// Numerical Test with Greater than Operator (True)
console.log("Greater than Test with Numbers: ", 5 > 4);
// Numerical Test with Greater than Operator (False)
console.log("Greater than Test with Numbers: ", 5 > 6);
// Numerical Test with Less than Operator (True)
console.log("Less than Test with Numbers: ", 4 < 5);
// Numerical Test with Less than Operator (False)
console.log("Less than Test with Numbers: ", 6 < 5);
// Numerical Test with Greater than or Equals to Operators (True)
console.log("Greater than or Equals to Test with Numbers: ", 5 >= 5);
// Numerical Test with Greater than or Equals to Operators (False)
console.log("Greater than or Equals to Test with Numbers: ", 2 >= 5);
//Numerical Test with Less than or Equals to Operators (True)
console.log("Less than or Equals to Test with Numbers: ", 3 <= 5);
// Numerical Test with Less than or Equals to Operators (False)
console.log("Less than or Equals to Test with Numbers: ", 6 <= 5);
//Test using 'and' operators (True)
console.log("Test using 'and' operators", 5 === 5 && 5 < 10);
//Test using 'and' operators (False)
console.log("Test using 'and' operators", 5 === 5 && 5 > 10);
//Test using 'or' operators (True)
console.log("Test using 'or' operators", 5 === 5 || 5 > 10);
//Test using 'or' operators (False)
console.log("Test using 'or' operators", 5 === 6 || 5 > 10);
//Test weather an item is in a array (True)
let places = ['Pakistan', 'India', 'China'];
console.log("Test 'China' in the array", places.includes('China'));
//Test weather an item is in a array (False)
console.log("Test 'China' in the array", places.includes('Canada'));
// //Test weather an item is not in the array (True)
console.log("Test 'Canada' is not in the array", !places.includes('Canada'));
//Test weather an item is not in the array (False)
console.log("Test 'Canada' is not in the array", !places.includes('Pakistan'));
