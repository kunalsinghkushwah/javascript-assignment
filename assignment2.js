// Assignment 2: Operators, Expressions, and Input Handling


const billInput = prompt("Enter the bill amount:", "100");
const tipInput = prompt("Enter the tip percentage:", "15");

const subtotal = Number(billInput);
const tipPercentage = Number(tipInput);

if (
  billInput === null ||
  tipInput === null ||
  billInput.trim() === "" ||
  tipInput.trim() === "" ||
  !Number.isFinite(subtotal) ||
  !Number.isFinite(tipPercentage) ||
  subtotal < 0 ||
  tipPercentage < 0
) {
  console.log("Invalid input. Enter non-negative numbers for the bill and tip.");
} else {
  const calculatedTip = subtotal * (tipPercentage / 100);
  let totalAmount = subtotal;
  totalAmount += calculatedTip;

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${calculatedTip}`);
  console.log(`Total Amount to Pay: $${totalAmount}`);
}
