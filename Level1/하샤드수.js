function solution(x) {
  var answer = true;

  const sum = (x + "")
    .split("")
    .map((num) => +num)
    .reduce((acc, num) => acc + num);

  return x % sum === 0;
}
