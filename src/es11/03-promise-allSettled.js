const promise1 = new Promise((resolve, reject)=>{
    (true)
        ? reject('Rejected')
        : resolve ('Resolved');
});
const promise2 = new Promise((resolve, reject)=>{
    (false)
        ? reject('Rejected')
        : resolve ('Resolved');
});

const promise3 = new Promise((resolve,reject)=> resolve('resolve2'));

//Cuando todas resuelvan
Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response));

// [
//     { status: 'rejected', reason: 'Rejected' },
//     { status: 'fulfilled', value: 'Resolved' },
//     { status: 'fulfilled', value: 'resolve2' }
//   ]