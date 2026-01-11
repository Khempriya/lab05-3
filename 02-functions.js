console.log("=== Functions & Arrow Functions Practice ===\n");
function greet(name) {
  return `Hello,${name}!`;
}
console.log("Function Declaration:");
console.log(greet("John"));
console.log(greet("Alice"));

const add = function (a, b) {
  return a + b;
};
console.log("\nFunction Expression:");
console.log("add(5,3):", add(5, 3));
console.log("add(10,20):", add(10, 20));

const multiply = (a, b) => {
  return a * b;
};
console.log("\nArrow Function (full syntax):");
console.log("muliply(4,5):", multiply(4, 5));

const square = (x) => x * x;
console.log("Arrow Function (shorthand):");
console.log("square(5):", square(5));

const double = (x) => x * 2;
console.log("double(10)", double(10));

const getRandom = () => Math.floor(Math.random() * 100);
console.log("getRandom():", getRandom());

function introduce(name = "Anonymous", age = 0, city = "Unknown") {
  return `${name} is ${age} years old from ${city}`;
}
console.log("\nDefault Parameters:");
console.log(introduce());
console.log(introduce("John"));
console.log(introduce("John", 25));
console.log(introduce("John", 25, "Bangkok"));

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log("\nRest Parameters:");
console.log("sum(1, 2, 3):", sum(1, 2, 3));
console.log("sum(5, 10, 15, 20):", sum(5, 10, 15, 20));
console.log("sum():", sum());

const sumWithReduce = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log("sumWithReduce(2, 4, 6, 8):", sumWithReduce(2, 4, 6, 8));

function printUser({ name, age, city }) {
  console.log(`${name},${age} years old,from ${city}`);
}

console.log("\nDestructuring Parameters:");
const user = { name: "Alice", age: 22, city: "Chiang Mai" };
printUser(user);

function validateEmail(email) {
  if (!email) {
    return { valid: false, message: "Email is required" };
  }
  if (email.indexOf("@") === -1) {
    return { valid: false, message: "Invalid email format" };
  }
  if (email.indexOf(".") === -1) {
    return { valid: false, message: "Missing domain extension" };
  }
  return { valid: true, message: "Email is valid" };
}
console.log("\nValidation Function:");
console.log(validateEmail(""));
console.log(validateEmail("invalidemail"));
console.log(validateEmail("invalid@email"));
console.log(validateEmail("valid@email.com"));

function createUser(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    getAge() {
      return this.age;
    },
  };
}
console.log("\nReturning Objects:");
const newUser = createUser("John", "Doe", 30);
console.log(newUser);
console.log("Email:", newUser.email);
console.log("Full name:", newUser.getFullName());

function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, (x) => x * 2);
const squared = processArray(numbers, (x) => x * x);
console.log("\nCallback Function:");
console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0 ? "Cannot divide by zero" : a / b),
  power: (a, b) => Math.pow(a, b),
  operate(operation, a, b) {
    if (this[operation]) {
      return this[operation](a, b);
    }
    return "Unknown operation";
  },
};
console.log("\nChallenge: Calculator");
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("20 / 4 =", calculator.divide(20, 4));
console.log("2 ^ 10 =", calculator.power(2, 10));
console.log("Using operate('add', 5, 3) =", calculator.operate("add", 5, 3));
console.log("\n✅ Activity 2 completed!");
