"use strict";

function solution(strings, n) {
  let answer = strings.sort(function (a, b) {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  });
  return answer;
}

//IDEAL SOLUTION
// - return 1 -> sort b before a
// - return -1 -> sort a before b
// - return 0 -> keep original order of a and b

// function solution(strings, n) {
//     // strings 배열
//     // n 번째 문자열 비교
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }
