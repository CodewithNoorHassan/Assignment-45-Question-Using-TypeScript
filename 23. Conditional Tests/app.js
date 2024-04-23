"use strict";
//Q No 23(Conditional Test)
// Test No 01 (True)
let Car = ('Toyota');
console.log("Is car == 'Toyota'? I predict True");
console.log(Car == 'Toyota');
// Test No 02 (False)
console.log("Is car == 'Mehran'? I predict False");
console.log(Car == 'Mehran');
// // Test No 03 (True)
console.log("Is car ==='Toyota'? I predict True");
console.log(Car === 'Toyota');
// //Test No 04 (False)
console.log("Is car.length()<5? I predict False");
console.log(Car.length < 5);
// //Test No 05 (True)
console.log("Is car.length()>5? I predict True");
console.log(Car.length > 5);
// // Test No 06 (False)
console.log("Is car === Toyota && car.length()<2? I predict False");
console.log(Car === 'Toyota' && Car.length < 2);
// // Test No 07 (True)
console.log("Is car.toUpperCase === TOYOTA? I predict True");
console.log(Car.toUpperCase() === "TOYOTA");
// //Test No 08 (False)
console.log("Is car.toLowercase() === 'TOYOTA'? I predict False");
console.log(Car.toLowerCase() === "TOYOTA");
// //Test No 09 (True)
console.log("Is car.toLowercas() === 'toyota'? I predict True");
console.log(Car.toLowerCase() === "toyota");
// //Test No 10 (False)
console.log("Is car.includes('u')? I predict False");
console.log(Car.includes('u'));
