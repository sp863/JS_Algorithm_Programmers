"use strict";

function solution(n, m) {
  var answer = [];

  let a = n;
  let b = m;
  let gcd;
  while (true) {
    let r = a % b;
    if (r === 0) {
      gcd = b;
      break;
    }
    a = b;
    b = r;
  }

  let multi = (n / gcd) * (m / gcd) * gcd;

  return [gcd, multi];
}

//IDEAL SOLUTION
// - using recursion
// function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
// function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
// function gcdlcm(a, b) {
//     return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
// }
