console.log("=== Control Flow & Logic Practice ===\n");
function checkAge(age) {
  if (age < 13) {
    return "Child";
  } else if (age < 18) {
    return "Teenager";
  } else if (age < 60) {
    return "Adult";
  } else {
    return "Senior";
  }
}
console.log("Age Classification:");
console.log("Age 5:", checkAge(5));
console.log("Age 15:", checkAge(15));
console.log("Age 25:", checkAge(25));
console.log("Age 65:", checkAge(65));

function getDayName(dayNum) {
  switch (dayNum) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Unknown day";
  }
}
console.log("\nDay Names:");
for (let i = 1; i <= 8; i++) {
  console.log(`Day ${i}:`, getDayName(i));
}
const isWeekend = (day) => (day === 6 || day === 7 ? "Weekend" : "Weekday");
console.log("\nWeekday/Weekend:");
console.log("Monday (1):", isWeekend(1));
console.log("Saturday (6):", isWeekend(6));

console.log("\nLogical Operators:");
const age = 25;
const hasLicense = true;
const hasInsurance = true;
const canDrive = age >= 18 && hasLicense && hasInsurance;
console.log("Can drive:", canDrive);
const isSpecial = age === 18 || age === 21 || age === 25;
console.log("Is special age:", isSpecial);
const isNotAdult = !(age >= 18);
console.log("Is not adult:", isNotAdult);

console.log("\nShort-Circuit Evaluation:");
const user = { name: "John", age: 25 };
const admin = null;
const userName = admin?.name || user.name || "Anonymous";
console.log("User name:", userName);

const userProfile = user && user.profile;
console.log("User profile:", userProfile);

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("\nGrading System:");
const score = [95, 85, 75, 65, 55];
score.forEach((score) => {
  console.log(`Score ${score}:Grade ${getGrade(score)}`);
});

function validateRegistration(formData) {
  const errors = [];
  if (!formData.name || formData.name.trim() === "") {
    errors.push("Name is required");
  } else if (formData.name.length < 3) {
    errors.push("Name must be at least 3 characters");
  }
  if (!formData.email || formData.email.indexOf("@") === -1) {
    errors.push("Valid email is required");
  }
  if (!formData.age || formData.age < 18) {
    errors.push("Must be 18 or older");
  }
  if (!formData.password || formData.password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }
  if (!formData.agreeToTerms) {
    errors.push("Must agree to terms");
  }
  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}
console.log("\nForm Validation:");
const validUser = {
  name: "John Doe",
  email: "john@example.com",
  age: 25,
  password: "securepass123",
  agreeToTerms: true,
};
const invalidUser = {
  name: "Jo",
  email: "invalidemail",
  age: 15,
  password: "pass",
  agreeToTerms: false,
};
console.log("Valid user:", validateRegistration(validUser));
console.log("Invalid user:", validateRegistration(invalidUser));
function getTrafficAction(color) {
  switch (color) {
    case "red":
      return "🛑🛑 STOP";
    case "yellow":
      return "🟨🟨 SLOW DOWN";
    case "green":
      return "🟢🟢 GO";
    default:
      return "❓ INVALID COLOR";
  }
}
console.log("\nChallenge: Traffic Light");
const lights = ["red", "yellow", "green", "blue"];
lights.forEach((light) => {
  console.log(`${light}: ${getTrafficAction(light)}`);
});
console.log("\n✅ Activity 3 completed!");
