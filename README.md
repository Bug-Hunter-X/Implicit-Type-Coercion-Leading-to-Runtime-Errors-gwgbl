# Implicit Type Coercion in TypeScript
This example demonstrates a potential issue with implicit type coercion in TypeScript.  While TypeScript's type system helps catch errors at compile time, there are cases where implicit type conversions can lead to unexpected behavior at runtime.

The `add` function is declared to take two numbers and return a number. However, the code calls `add` with a string and a number. TypeScript doesn't raise an error during compilation, but the result is string concatenation rather than numerical addition.

This bug highlights the importance of thorough testing and consideration of implicit type conversions, especially when dealing with external data or user input.