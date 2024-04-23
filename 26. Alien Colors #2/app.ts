//Q No 26 (Alien Color #2)
let alien_color: string = 'Green';

// Version 1: Runs the if block (Alien color is green)
if (alien_color === 'Green') {
    console.log("Congratulations! You just earned 5 points.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}
// Assigning a color other than green
alien_color = 'red';

// Version 2: Runs the else block (Alien color is not green)
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}
