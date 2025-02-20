function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // This will compile without error but may result in unexpected behavior at runtime.