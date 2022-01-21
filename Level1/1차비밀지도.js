function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    const binary1 = toBinary(n, arr1[i]);
    const binary2 = toBinary(n, arr2[i]);

    let pw = "";

    for (let j = 0; j < n; j++) {
      if (+binary1[j] + +binary2[j] >= 1) {
        pw += "#";
      } else {
        pw += " ";
      }
    }
    answer.push(pw);
  }

  return answer;
}

function toBinary(n, num) {
  let arr = new Array(n).fill(0);

  let temp = num;
  let idx = 0;
  while (temp > 0) {
    const r = Math.floor(temp % 2);
    arr[idx++] = r;
    temp = Math.floor(temp / 2);
  }

  let binaryNum = "";

  for (let i = n - 1; i >= 0; i--) {
    binaryNum += arr[i] + "";
  }
  return binaryNum;
}
