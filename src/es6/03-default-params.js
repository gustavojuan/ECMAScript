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