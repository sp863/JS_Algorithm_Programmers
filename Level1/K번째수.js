function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0] - 1;
    const end = commands[i][1];
    const nth = commands[i][2] - 1;
    let tempArr = array.slice(start, end);

    //sort
    tempArr.sort((a, b) => a - b);
    //push
    answer.push(tempArr[nth]);
  }
  return answer;
}

//IDEAL SOLUTION
// - Destructuring 과 sort, map, filter 고차함수를 써서 모두 적절히 사용
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
