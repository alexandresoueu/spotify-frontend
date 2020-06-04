const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => ((b === 0) ? 'Do not divide by zero!' : a / b);

export {
  sum, sub, mult, div,
};
