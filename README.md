# JavaScript Assignments and Capstone

This repository contains six beginner JavaScript assignments and the Interactive Product Inventory & Analytics Dashboard capstone.

## Files

- `assignment1.js` — variables, data types, and console output
- `assignment2.js` — prompt input, type conversion, arithmetic, and validation
- `assignment3.js` — `if...else`, `switch`, and the ternary operator
- `assignment4.js` — `for`, `while`, `break`, `do...while`, and `continue`
- `assignment5.js` — regular functions, arrow functions, default parameters, and block scope
- `assignment6.js` — objects, `forEach()`, `filter()`, and `map()`
- `capstone.js` — interactive product inventory and analytics

## How to run

### Assignments 1, 3, 4, 5, and 6

Install Node.js, open a terminal in this folder, and run for example:

```bash
node assignment1.js
node assignment3.js
node assignment4.js
node assignment5.js
node assignment6.js
```

### Assignment 2 and the capstone

These use browser `prompt()`. Create a small HTML file or use the browser console. For example, create `run.html`:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Assignment Runner</title>
</head>
<body>
  <h1>JavaScript Assignment Runner</h1>
  <p>Open Developer Tools → Console to see output.</p>
  <!-- Change the script path to assignment2.js or capstone.js. -->
  <script src="capstone.js"></script>
</body>
</html>
```

Open `run.html` in a browser. The prompts use example defaults to reproduce the expected capstone output; you can edit the values or type your own.

## Notes

- Assignment 1 uses `typeof` as requested. JavaScript reports arrays as `"object"`.
- Assignment 3 uses `if...else` to determine the grade, `switch` to handle the grade, and a ternary expression for pass/fail.
- Assignment 5 catches the expected `ReferenceError` so the program can display the requested scope-error message without crashing.
- The capstone categorizes prices below $100 as Budget, $100–$499.99 as Standard, and $500 or more as Premium. These thresholds are explicit implementation choices because the assignment gives examples but does not specify exact cutoffs.
