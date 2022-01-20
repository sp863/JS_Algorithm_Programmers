function solution(n, lost, reserve) {
  var answer = n;

  let shirts = new Array(n).fill(1);

  lost.forEach((student) => (shirts[student - 1] -= 1));
  reserve.forEach((student) => (shirts[student - 1] += 1));

  for (let i = 0; i < shirts.length; i++) {
    if (shirts[i] === 0) {
      if (i - 1 >= 0 && shirts[i - 1] === 2) {
        shirts[i]++;
        shirts[i - 1]--;
      } else if (i + 1 < n && shirts[i + 1] === 2) {
        shirts[i]++;
        shirts[i + 1]--;
      } else {
        answer--;
      }
    }
  }
  return answer;
}
