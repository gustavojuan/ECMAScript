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