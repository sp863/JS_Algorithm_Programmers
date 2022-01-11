"use strict";

function solution(phone_number) {
  var answer = "";

  let cnt = 0;
  for (let i = phone_number.length - 1; i >= 0; i--) {
    if (cnt < 4) {
      answer += phone_number[i];
    } else {
      answer += "*";
    }
    cnt++;
  }
  return answer.split("").reverse().join("");
}

//IDEAL SOLUTION
// - 정규식 사용
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// - slice 사용 거꾸로 사용
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}
