function solution(numbers) {
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) sum += i;
  }

  return sum;
}

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
