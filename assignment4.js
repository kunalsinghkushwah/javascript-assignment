// Assignment 4: Loop Control Structures

console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n-- First number > 10 divisible by 6 --");
let number = 11;
while (true) {
  if (number > 10 && number % 6 === 0) {
    console.log(`Found: ${number}`);
    break;
  }
  number++;
}

// Demonstrate do...while with continue by skipping even numbers.
console.log("\n-- Odd numbers from 1 to 5 (do...while + continue) --");
let count = 0;
do {
  count++;
  if (count % 2 === 0) {
    continue;
  }
  console.log(count);
} while (count < 5);
