//Propiedades de propagación
const user = { username:'admin',age:39, country:'CO'};
const {username, age,...values} = user;

console.log(username);
console.log(age);
console.log(values);
// admin
// 39
// { country: 'CO' }
