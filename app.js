let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number."));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your best guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
    } else {
        guess = prompt("Too low! Enter a new guess:")
    }
}
if (guess === 'q') {
    console.log("Why did you give up??")
}
else {
    console.log(`YOU GOT IT IN ${attempts} GUESSES!`);
}
