class User {
    
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodo privado
    #speak(){
        return 'Hello';
    }


    greeting () {
        return `${this.speak()} ${this.name}`;
    }

    //getter
    get #uAge() {
        return this.age;
    }

    //setter
    set #uAge(n){
        this.age = n;
    }

}

const developer1  =new User('Gus',15);
console.log(developer1.uAge);
developer1.uAge = 39;
console.log(developer1.uAge);
