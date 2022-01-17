function solution(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) sum += absolutes[i];
    else sum += -absolutes[i];
  }

  return sum;
}

//IDEAL SOLUTION
// - using reduce
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
