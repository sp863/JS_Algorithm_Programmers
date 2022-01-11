function solution(s, n) {
  var answer = "";

  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const arr = alpha.split("");

  for (let i = 0; i < s.length; i++) {
    let isUpper = s[i] === s[i].toUpperCase();
    let letter = s[i].toLowerCase();
    let idx = -1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === letter) {
        idx = j;
        break;
      }
    }
    if (idx === -1) answer += " ";
    else {
      idx += n;
      if (idx > arr.length - 1) idx = idx - (arr.length - 1) - 1;
      if (isUpper) answer += arr[idx].toUpperCase();
      else answer += arr[idx];
    }
  }
  return answer;
}

//IDEAL SOLUTION
// - index of 쓰는걸 왜 몰랐지
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
