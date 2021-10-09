const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 1000);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1}, ${output2}, ${output3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output = await Promise.race(promises);
  return `winner of the race is ${output}`;
}

async function sequence() {
  const output1 = await a();
  console.log(`sequence is done ${output1}`);
  const output2 = await b();
  console.log(`sequence is done ${output2}`);
  const output3 = await c();
  return `sequence is done ${output1}, ${output2}, ${output3}`;
}

parallel().then(console.log);
sequence().then(console.log);
race().then(console.log);
