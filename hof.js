const hof = (fn) => fn(5);

const abc = hof(function a(x) {
  return x;
});

console.log(abc);

const counter = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const incrementFn = counter();

console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());
