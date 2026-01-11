console.log("=== Loops & Array Methods Practice ===\n");
console.log("For loop (0-4):");
for (let i = 0; i < 5; i++) {
  console.log(`i = ${i}`);
}
console.log("\nWhile loop (count down):");
let count = 5;
while (count > 0) {
  console.log(` ${count}...`);
  count--;
}
console.log(" Blastoff 🚀");

const fruits = ["apple", "banana", "orange"];
console.log("\nFor...of loop (fruits):");
for (const fruit of fruits) {
  console.log(` - ${fruit}`);
}

const person = { name: "John", age: 25, city: "Bangkok" };
console.log("\nFor...in loop (person properties):");
for (const key in person) {
  console.log(` ${key}: ${person[key]}`);
}
console.log("\nforEach (with index):");
fruits.forEach((fruit, index) => {
  console.log(` ${index}: ${fruit}`);
});

const numbers = [1, 2, 3, 4, 5];
console.log("\nmap - transform elements:");
console.log("Original:", numbers);
const doubled = numbers.map((n) => n * 2);
console.log("Doubled:", doubled);
const squared = numbers.map((n) => n * n);
console.log("Squared:", squared);
const asStrings = numbers.map((n) => `Number: ${n}`);
console.log("As strings:", asStrings);

console.log("\nfilter - select elements:");
const evens = numbers.filter((n) => n % 2 === 0);
console.log("Even numbers:", evens);
const odds = numbers.filter((n) => n % 2 !== 0);
console.log("Odd numbers:", odds);
const greaterThan2 = numbers.filter((n) => n > 2);
console.log("Numbers > 2:", greaterThan2);

console.log("\nreduce - accumulate:");
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);
const product = numbers.reduce((total, n) => total * n, 1);
console.log("Product:", product);
const concatenated = numbers.reduce((str, n) => str + n, "");
console.log("Concatenated:", concatenated);
const words = ["apple", "banana", "apple", "orange", "apple"];
const wordCount = words.reduce((counts, word) => {
  counts[word] = (counts[word] || 0) + 1;
  return counts;
}, {});
console.log("Word count:", wordCount);

console.log("\nMethod chaining:");
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenStrings = data
  .filter((n) => n % 2 === 0)
  .map((n) => `${n}²=${n * n}`)
  .join(", ");
console.log("Even numbers squared:", evenStrings);
const numbers2 = [10, 20, 30, 40, 50];
const average = numbers2.reduce((sum, n) => sum + n, 0) / numbers2.length;
console.log("Average:", average);

const students = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 85 },
  { name: "Diana", score: 92 },
  { name: "Eve", score: 88 },
];
console.log("\nChallenge: Student Analysis");
console.log("Student:", students);
const names = students.map((s) => s.name);
console.log("Names:", names.join(", "));
const highScorers = students.filter((s) => s.score >= 85);
console.log(
  "High scorers:",
  highScorers.map((s) => `${s.name} (${s.score})`).join(", ")
);
const classAverage =
  students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log("Class average:", classAverage.toFixed(2));
const topScorer = students.reduce((top, s) => (s.score > top.score ? s : top));
console.log("Top scorer:", `${topScorer.name} (${topScorer.scorer})`);
const summary = students
  .map((s) => ({
    ...s,
    grade: s.score >= 90 ? "A" : s.score >= 80 ? "B" : "C",
  }))
  .sort((a, b) => b.score - a.score);
console.log("Summary (sorted):");
summary.forEach((s) => console.log(` ${s.name}: ${s.score} (${s.grade})`));
console.log("\n✅ Activity 4 completed!");
