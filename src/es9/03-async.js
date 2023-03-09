async function* anotherGenerator()
{
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other  = anotherGenerator();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('chivato');

// chivato
// 1
// 2
// 3
// undefined

async function arrayOfNames(array){
    for await( let value of array){
        console.log(value);
    }
}

const names = arrayOfNames(['oscar','ana','david', 'ulises','jeniifer']);
console.log('After');

// After
// oscar
// ana
// david
// ulises
// jeniifer


