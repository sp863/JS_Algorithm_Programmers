function solution(lottos, win_nums) {
  var answer = [];

  const winLotto = [6, 5, 4, 3, 2, 1];

  let zero = lottos.reduce((acc, num) => (num === 0 ? acc + 1 : acc), 0);
  let correct = win_nums.reduce(
    (acc, num) => (lottos.includes(num) ? acc + 1 : acc),
    0
  );

  if (zero === 0 && correct === 0) {
    return [6, 6];
  }

  const max = zero + correct;
  answer.push(winLotto[max - 1]);

  const min = correct;
  if (min <= 1) answer.push(winLotto[0]);
  else answer.push(winLotto[min - 1]);

  return answer;
}
