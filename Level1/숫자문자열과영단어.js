function solution(s) {
  let temp = s;

  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < arr.length; i++) {
    temp = temp.replace(new RegExp(arr[i], "gi"), `${i}`);
  }

  console.log(temp);

  return +temp;
}
