# ****Historia de JavaScript: ¿qué es ECMAScript?****

- 1950: Se empieza a trabajar en computación.
    - Analizar temas de las Segunda Guerra Mundial
- 1969: **ARPAnet** compartir información entre computadoras.
- 1990: Tim Berners-Lee  CERN creó las bases de **WWW**.
- 1993: **Mosaic**, primer navegador web,
- 1994: Marc Andreessen crea **Netscape**, empresa y navegador comercial con enlaces e imágenes.

## Browsers War

- Microsoft lanza IE vs Netscape
- Internet Explorer 1997
- Nacen:
    - CSS - Microsoft
    - Moz://a (Mosaic + GodZILLA)
    - JS - Netscape 1995 Mocha
        - Mocha
        - Livescript
        - Javascript
    - Microsoft:
        - JScript
    - Nace ECMA International:  European Computer Manufacter Association
        - Estandarización
        - Regulación en base al estándar ECMAScript
        - 1997 - ECMA-262
        
- 1995 Mocha

## Evolución de ECMAScript

- 1995 Mocha
- 1996 JScript
- 1997 ECMA-262 (ES)
- 1997 ES1
- 1998 ES2
- 1999 ES3
- **2000 ES4 (abandonado)**
- 2005 ES5
- **2015 ES6 ⇒  La gran actualización**
- 2016 ES7
- 2017 ES8
- 2018 ES9
- 2019 ES10
- 2020 ES11
- 2021 ES12
- 2022 ES13

## TC39

- Grupo de desarrolladores, académicos y hackers que están a cargo de revisar cada nueva propuesta o funcionalidad que cumpla con el estándar.
- Está bajo ECMA International

### ESNEXT: lo que viene

### Etapas de nueva propuesta para ECMAScript

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/520f7188-f8f8-4239-9626-c2283e5e1723/Untitled.png)

# ****Configurando nuestras herramientas****

## VSC

# ES6: la gran actualización (2015)

- **ES2015 ⇒ la gran versión**
- Estas herramientas son las bases de los nuevos frameworks JS

## 00-let-const.js

```jsx
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
```

## 01-arrow-function.js

```jsx
//alternativa a function()

function square(num){
    return num*num
}

//Arrow fucntion
const square = (num) => {
    return num * num;
}

//arrow f con return implícito
const square = num =>  num * num;
```

## 02-strings.js

```jsx
//Template literalls
let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' '+ world +'!';
epicPhrase = `${hello} ${world}!`;

console.log (epicPhrase);

//Multiline strings
let lorem = ' esto es un string \n '+'esto es otra linea';
let lorem2 = `esto es una frase épica
cuya continuación está en otra línea
`;
console.log(lorem)
console.log(lorem2)
```

## 03-default-params.js

```jsx
//antes de 2015;
function newUser(name, age, country){
    var name = name || 'Nombre default';
    var age = age || '18';
    var country = country || 'No especifica';
    console.log(name, age, country);
}

newUser();
newUser('Gus',39,'ES');

// Más amigable así
function newAdmin(name = 'admin',age=18, country='No especifica'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Gus',39,'ES');
```

## 04-rest-spread.js

```jsx
//arrays descructuring
let fruits  = ['apple','banana'];
let [a,b] = fruits;
console.log(a,fruits[1]);

//object desctructuring
let user = {username:'gustavo',age:34}
let {username,age} = user;
console.log(username,age);
```

## 05-spread-operator.js

```jsx
//spread operator
let person = { name:'gus', age:39 };
let country = 'ES';

let data = { ...person, country }
console.log(data);
//{ name: 'gus', age: 39, country: 'ES' }

//rest params
function sum(num,...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(27,1,2,3,4,5);
//[ 1, 2, 3, 4, 5 ]
//28
```

## 06-object-literalls.js

```jsx
//enhanced object literalls

function newUser(name,age,country,uId){
    return {
        name,
        age,
        country,
        id:uId
    }
}

let user = newUser('edgar',58,'MX',1);
console.log(user);
```

## 07-promises.js

```jsx
//Promise: una forma de trabajar el asynchronism
//Cómo trabajar con callbacks
//Una promesa es algo que va a pasar ahora, más tarde o nunca

const anotherFunction = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Whoops!');
        }
    });
}

anotherFunction()
    .then(response => console.log(response))        
    .then(response => console.log('varios then'))
    .catch(err => console.log(err));
```

## 08-classe.js

```jsx
//declararndo
//class User {};

//instanciando
//const newUser = new User();

class User {
    //metodos
    greeting(){
        return `Hello!`;
    }
};
const newUser = new User();
console.log(newUser.greeting());
const developer = new User();
console.log(developer.greeting());

//Constructor
class User {
    //constructor
    constructor() {
        console.log('new user');
    }

    greeting(){
        return `Hello!`;
    }
}

const gustavo  = new User();

//this
//hace referencia al elemento padre que lo contiene

class User {
    //constructor
    constructor(name) {
        this.name = name;
    }

    speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

}

const nuevouser  = new User('gus');
console.log(nuevouser.greeting());

//Setters &  getters
class User {
    
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos
    speak(){
        return 'Hello';
    }

    greeting () {
        return `${this.speak()} ${this.name}`;
    }

    //getter
    get uAge() {
        return this.age;
    }

    //setter
    set uAge(n){
        this.age = n;
    }

}

const developer1  =new User('Gus',15);
console.log(developer1.uAge);
developer1.uAge = 39;
console.log(developer1.uAge);
```

## 09-module.js

- Antes ES6 no había módulos
- Los módulos permiten usar archivos tipo import, extport.
- 

```jsx
//module.js
const hello = () => {
    console.log('Hello!');
}
export default hello;

///////////////////////////
//09-module.js
import hello  from './module.js';
hello(); //SyntaxError: Cannot use import statement outside a module

//////////////////////////
//package.json
{"type": "module"}

//Cannot find module add.js to import

```

## 10-generator.js

```jsx
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
```

## 11-set-add.js

```jsx
const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);
//Set(3) { 'item 1', 'item 2', 'item 3' }
```

# ES7: primeros cambios constantes (2016)