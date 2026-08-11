// Multiply two numbers
export function multiply(a, b) {
  return a * b;
}

// Divide two numbers
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Subtract the second number from the first
export function subtract(a, b) {
  return a - b;
}
