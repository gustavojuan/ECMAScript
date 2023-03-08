import  getData from './api.js';
export function solution() {
   getData()
   .then(res => {console.log(res);})
   .catch(err => err);
  }

  solution();