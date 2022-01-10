"use strict";

function solution(n) {
  let x = Math.sqrt(n);
  if (x % 1 === 0) return (x + 1) * (x + 1);
  return -1;
}
