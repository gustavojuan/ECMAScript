//Declarar y asignar(incializar)
var lastName = 'Juan';
//reasignar(reinicializar)
lastName = 'de Juan';
console.log(lastName);


//LET
//declarar y asignar
let fruit = 'Apple';
//reasignar(reinicializar)
fruit = 'Kiwi';
console.log(fruit);

//CONst
//declarar y asignar
const animal = 'Dog';
//reasignar(reinicializar)
animal = 'Cat';// ERROR Assignment to constant variable.
console.log(animal);

const fruits = () =>{
    if(true){
        var fruit1= 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //function scope
    }

    console.log(fruit1);
    console.log(fruit2);//Errir fruit2 is not defined
    console.log(fruit3);

}

fruits();