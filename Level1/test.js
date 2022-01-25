const something = {
  age: 10,
  speak: function () {
    console.log(this.age);
  },
};

const butler = {
  age: 20,
  serve: function (cb) {
    cb();
  },
};

// Q: 아래와 같이 실행했을 경우, 콘솔에 출력되는 값이 무엇일까요?
//    고민해본 후, 주석을 해제하여 정답을 확인해보세요.
//
debugger;
butler.serve(something.speak);
