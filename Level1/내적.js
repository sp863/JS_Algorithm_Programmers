"use strict";

function solution(a, b) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    const multi = a[i] * b[i];
    sum += multi;
  }

  return sum;
}

//IDEAL SOLUTION
// - using reduce
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
