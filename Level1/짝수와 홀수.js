function solution(num) {
  var answer = "";
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//IDEAL SOLUTION
// - using ternary operator
// function evenOrOdd(num) {
//   return num % 2 ? "Odd" : "Even";
// }
