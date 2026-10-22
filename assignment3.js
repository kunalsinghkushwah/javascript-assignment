// Assignment 3: Conditional Logic Implementation

const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

// Use switch to report the grade determined by the if/else chain.
switch (grade) {
  case "A":
    console.log(`Score: ${score}\nGrade: A\nStatus: ${score >= 40 ? "Passed" : "Failed"}`);
    break;
  case "B":
    console.log(`Score: ${score}\nGrade: B\nStatus: ${score >= 40 ? "Passed" : "Failed"}`);
    break;
  case "C":
    console.log(`Score: ${score}\nGrade: C\nStatus: ${score >= 40 ? "Passed" : "Failed"}`);
    break;
  case "D":
    console.log(`Score: ${score}\nGrade: D\nStatus: ${score >= 40 ? "Passed" : "Failed"}`);
    break;
  default:
    console.log(`Score: ${score}\nGrade: F\nStatus: ${score >= 40 ? "Passed" : "Failed"}`);
}
