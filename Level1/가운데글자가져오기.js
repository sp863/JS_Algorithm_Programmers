function solution(s) {
  var answer = "";
  if (s.length % 2 === 1) {
    let idx = Math.ceil(s.length / 2);
    answer += s[idx - 1];
  } else {
    let idx = s.length / 2;
    answer += s[idx - 1];
    answer += s[idx];
  }
  return answer;
}
