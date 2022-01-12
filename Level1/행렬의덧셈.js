function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }

  return answer;
}

//IDEAL SOLUTION
// - map 으로 이렇게 간결하게 가능??
function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
