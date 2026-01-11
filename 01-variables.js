console.log("=== Variables & Data Types Practice ===\n");
const MAX_USER = 100;
const PI = 3.14159;
const GRAVITY = 9.8;

console.log("Constants:");
console.log("MAX_USER:", MAX_USER);
console.log("PI:", PI);

let count = 0;
count++;
count++;
console.log("\nVariable (let):");
console.log("count after increment:", count);

console.log("\n=== Primitive Data Types ===");
const age = 25;
const height = 5.9;
const temperature = -10;
console.log("Numbers:", age, height, temperature);
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log("String:", fullName);

const isStudent = true;
const isTeacher = false;
console.log("Booleans:", "isStudent:", isStudent, "isTeacher:", isTeacher);
const emptyValue = null;
let noValue;
console.log("null:", emptyValue);
console.log("undefined", noValue);

console.log("n=== Object Data Types ===");
const fruits = ["apple", "banana", "orange"];
console.log("Array:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Array lenght:", fruits.length);
const person = {
  name: "John",
  age: 25,
  city: "Bangkok",
  isStudent: true,
};
console.log("Object:", person);
console.log("Person name", person.name);
console.log("Person age:", person.age);

console.log("\n===typeof Operator ===");
console.log("typeof 25:", typeof 25);
console.log("typeof 'hello':", typeof "hello");
console.log("typeof undefined:", typeof undefined);
console.log("typeof []:", typeof []);
console.log("typeof {}:", typeof {});
console.log("typeof (() => {}):", typeof (() => {}));

console.log("\n=== Type Coercion ===");
console.log("'5' + 2:", "5" + 2);
console.log("'5' - 2:", "5" - 2);
console.log("'5' * 2:", "5" * 2);
console.log("true + 1:", true + 1);
console.log("\nExplicit coercion:");
console.log("String(25):", String(25));
console.log("Number('25'):", Number("25"));
console.log("Boolean(1):", Boolean(1));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(''):", Boolean(""));
console.log("Boolean('hello'):", Boolean("hello"));

console.log("\n=== Challenge: Person Object ===");
const student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  gpa: 3.8,
  courses: ["HTML", "CSS", "JavaScript"],
  isActive: true,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getInfo: function () {
    return `${this.getFullName()}, Age: ${this.age}, GPA: ${this.gpa}`;
  },
};

console.log("Student object:");
console.log(student);
console.log("Full name:", student.getFullName());
console.log("Info:", student.getInfo());
console.log("Courses:", student.courses.join(", "));

console.log("\n===Truthy vs Falsy ===");
const falsyValues = [0, "", null, undefined, false, NaN];
console.log("Falsy values:");
falsyValues.forEach((val) => {
  console.log(
    ` ${typeof val === "string" ? `"${val}"` : val}: ${Boolean(val)}`
  );
});
const truthyValues = [1, "hello", true, [], {}, () => {}];
console.log("\nTruthy values:");
truthyValues.forEach((val) => {
  const display = Array.isArray(val)
    ? "[]"
    : typeof val === "function"
    ? "() => {}"
    : typeof val === "object"
    ? "{}"
    : val;
  console.log(` ${display}: ${Boolean(val)}`);
});
console.log("\n✅ Activity 1 completed.");
