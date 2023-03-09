const promise1 = new Promise((resolve, reject) => reject("reject1"));
const promise2 = new Promise((resolve, reject) => resolve("resolve2"));
const promise3 = new Promise((resolve, reject) => resolve("resolve3"));

//Cuando todas resuelvan
Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);
