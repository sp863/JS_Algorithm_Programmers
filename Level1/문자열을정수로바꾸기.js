function solution(s) {
  let num = 0;

  if (s[0] === "+") {
    num = +s.slice(1);
  } else if (s[0] === "-") {
    num = +s.slice(1);
    num *= -1;
  } else {
    num = +s;
  }

  return num;
}
