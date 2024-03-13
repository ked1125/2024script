console.log(1);
console.log(2);

function fn1(callback) {
  setTimeout(function () {
    console.log(3);
  }, 3000);
  callback();
}

function fn2() {
  console.log(4);
}

fn1(fn2);

// setTimeout(function () {
//   console.log(3);
// }, 2000);
// console.log(4);
