function solution(dartResult) {
  // 0 ~ 10
  // S, D, T
  // * #

  let totalScore = 0;
  let preScore = 0;

  let i = 0;
  while (i < dartResult.length) {
    let num = 0;
    let power = 0;
    let buff = 1;

    const tempNum = +dartResult[i];
    let area = dartResult[i + 1];
    let tempBuff = dartResult[i + 2];

    //10일때 아닐때 구분
    if (area === "0") {
      //숫자정리
      num = 10;
      //영역정리
      area = dartResult[i + 2];
      power = getArea(area);
      //중첩정리
      buff = getBuff(tempBuff);
    } else {
      //숫자정리
      num = tempNum;
      //영역정리
      power = getArea(area);
      //중첩정리
      buff = getBuff(tempBuff);
    }

    if (i === 2) {
      console.log(num);
      console.log(power);
      console.log(buff);
    }

    //이전 점수 update
    if (buff === 2) totalScore -= preScore;
    else preScore = 0;

    //index 정리
    i += getIndex(num, buff);

    totalScore += preScore * buff;

    totalScore += Math.pow(num, power) * buff;
    preScore = Math.pow(num, power) * buff;
  }

  return totalScore;
}

function getIndex(num, buff) {
  if (num === 10 && buff !== 1) return 4;
  else if (num === 10 && buff === 1) return 3;
  else if (num < 10 && buff !== 1) return 3;
  return 2;
}

function getArea(area) {
  if (area === "S") return 1;
  else if (area === "D") return 2;
  return 3;
}

function getBuff(temp) {
  if (temp === "*") return 2;
  if (temp === "#") return -1;
  return 1;
}
