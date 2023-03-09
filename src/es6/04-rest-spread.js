//arrays descructuring
let fruits  = ['apple','banana'];
let [a,b] = fruits;
console.log(a,fruits[1]);

//object desctructuring
let user = {username:'gustavo',age:34}
let {username,age} = user;
console.log(username,age);

//spread operator
let person = { name:'gus', age:39 };
let country = 'ES';

let data = { id:1,...person, country }
console.log(data);

//rest params
function sum(num,...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(27,1,2,3,4,5);
//[ 1, 2, 3, 4, 5 ]
//28

