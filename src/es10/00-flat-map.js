//Flat Devuelve una matriz de cualquier submatriz
const array = [1,1,12,2,[1,2,5,5,[1,2,3]]];
console.log(array.flat(3));
// [
//     1, 1, 12, 2, 1,
//     2, 5,  5, 1, 2,
//     3
//   ]
  

//Flatmap mapea y aplana
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v=>[v,v*2]));
// [
//     1, 2, 2, 4,  3,
//     6, 4, 8, 5, 10
//   ]