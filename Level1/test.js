"use strict";

function solution(s, n) {
  var answer = "";

  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const arr = alpha.split("");

  for (let i = 0; i < s.length; i++) {
    let isUpper = s[i] === s[i].toUpperCase();
    let letter = s[i].toLowerCase();
    let idx = -1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === letter) {
        idx = j;
        break;
      }
    }
    if (idx === -1) answer += " ";
    else {
      idx += n;
      console.log(idx);
      console.log(arr.length - 1);
      if (idx > arr.length - 1) idx = idx - (arr.length - 1) - 1;
      console.log(idx);
      if (isUpper) answer += arr[idx].toUpperCase();
      else answer += arr[idx];
    }
  }
  console.log(answer);
  return answer;
}

solution("z", 1);
