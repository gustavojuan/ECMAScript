const regex = /\b(Apple)+\b/g;
const fruit = "Apple, banana, kiwi, Apple, orange";


for(const match of fruit.matchAll(regex)){
    console.log(match);
}


// [
//     'Apple',
//     'Apple',
//     index: 0,
//     input: 'Apple, banana, kiwi, Apple, orange',
//     groups: undefined
//   ]
//   [
//     'Apple',
//     'Apple',
//     index: 21,
//     input: 'Apple, banana, kiwi, Apple, orange',
//     groups: undefined
//   ]
  