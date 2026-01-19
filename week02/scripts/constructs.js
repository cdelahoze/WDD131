let a = 7;
let b = 3;

function constructsDemo() {
  console.log("Initial values:");
  console.log("a = " + a);
  console.log("b = " + b);

  // Addition assignment (+=)
  a += b;
  console.log("\na += b → a is now: " + a);

  // Subtraction assignment (-=)
  a -= b;
  console.log("a -= b → a is now: " + a);

  // Multiplication assignment (*=)
  a *= b;
  console.log("a *= b → a is now: " + a);

  // Division assignment (/=)
  a /= b;
  console.log("a /= b → a is now: " + a);

  // Exponentiation assignment (**=)
  a **= b;
  console.log("a **= b → a is now: " + a);

  // Remainder assignment (%=)
  a %= b;
  console.log("a %= b → a is now: " + a);

  // Logical AND assignment (&&=)
  a &&= b;
  console.log("a &&= b → a is now: " + a);

  // Logical OR assignment (||=)
  a ||= b;
  console.log("a ||= b → a is now: " + a);
}

constructsDemo();
