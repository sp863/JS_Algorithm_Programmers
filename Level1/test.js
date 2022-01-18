"use strict";

for (var i = 1; i < 6; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
