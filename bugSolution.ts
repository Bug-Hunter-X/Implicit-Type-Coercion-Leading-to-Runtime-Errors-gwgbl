function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Arguments must be numbers.');
  }
  return a + b;
}

let result1 = addSafe(10, 5); // Correct addition
console.log(result1); // Output: 15

try {
  let result2 = addSafe("hello", 5); // throws error
} catch (e) {
  console.error(e.message); // Output: Invalid input: Arguments must be numbers.
}

//Alternative using type guards
function isNumber(arg: any): arg is number {
    return typeof arg === 'number';
}

function addSafeTypeGuard(a: any, b: any): number {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Invalid input: Arguments must be numbers.');
    }
    return a + b;
}

let result3 = addSafeTypeGuard(10, 5); // Correct addition
console.log(result3); // Output: 15

try {
  let result4 = addSafeTypeGuard("hello", 5); // throws error
} catch (e) {
  console.error(e.message); // Output: Invalid input: Arguments must be numbers.
}