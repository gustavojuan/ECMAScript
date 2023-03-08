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
