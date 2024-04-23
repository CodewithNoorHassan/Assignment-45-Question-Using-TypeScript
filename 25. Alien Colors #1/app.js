"use strict";
//Q No 25 (Alien Color)
//Create a variable called alien_color
let alien_color = ('Green');
//write an if statement to test aliean_color is Green, if it is print a message that the player just earned 5 points
if (alien_color === 'Green') {
    console.log('You just earned 5 points');
}
//write one version of this program that passes the if test and another that fails, the version thats fails will have no output
alien_color = 'Red';
if (alien_color === 'Green') {
    console.log('You just earned 5 points');
}
