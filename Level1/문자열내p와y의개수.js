function solution(s) {
  var answer = true;

  let p = 0;
  let y = 0;

  let test = s.toLowerCase();

  for (let i = 0; i < test.length; i++) {
    if (test[i] === "p") {
      p++;
    } else if (test[i] === "y") {
      y++;
    }
  }

  if (p === y) return true;
  else return false;

  return answer;
}

//IDEAL SOLUTION
// - split('P') -> y의 개수가 length 가 구해진다
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
