const anotherFunction = () => {
    return new Promise((resolve, reject)=>{
        (!true)
            ? resolve('Hey!')
            : reject('Whoooops')       
    });
}

anotherFunction()
    .then(response => console.log(response))        
    .then(response => console.log('varios then'))
    .catch(err => console.log(err))
    .finally(()=>console.log('Finnaly'));