const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

const multiplyBy3andAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3andAbsolute(-50));
