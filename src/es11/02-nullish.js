const anotherNumber  = 1;
const validate  = anotherNumber ?? 5;

console.log(validate); //1


//Si llega nulo que valga 5
const anotherNumber2  = null;
const validate2  = anotherNumber2 ?? 5;

console.log(validate2);//5