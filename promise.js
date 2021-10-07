const endpoints = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicod.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  endpoints.map((url) => {
    return fetch(url).then((response) => response.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("API ERROR !"));
