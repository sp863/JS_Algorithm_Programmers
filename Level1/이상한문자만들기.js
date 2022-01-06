function solution(s) {
  var answer = "";

  s = s.toLowerCase();

  const arr = s.split(" ");

  arr.forEach((word, j) => {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i];
      }
    }
    answer += newWord;
    if (j !== arr.length - 1) answer += " ";
  });

  return answer;
}

//IDEAL SOLUTION
// - regex 쓰는듯
// function toWeirdCase(s){
//   return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

// }
