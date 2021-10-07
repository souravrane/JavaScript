fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json)
  .then(console.log);

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
