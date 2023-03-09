//Generador nos devuelve valores según el algoritmo definido
//* - yield - next
function* iterate(array) {
    for(let value of array){
        yield value;
    }
}

const it = iterate(['oscar','david', 'ana', 'ulises','jennifer']);

console.log(it.next().value);//oscar
console.log(it.next().value);//david
console.log(it.next().value);//ana
console.log(it.next().value);//ulises
console.log(it.next().value);//jennifer
console.log(it.next().value);//undefined
console.log(it.next().value);//undefined