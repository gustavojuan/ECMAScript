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