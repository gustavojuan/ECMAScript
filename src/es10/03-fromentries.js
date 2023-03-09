const entries = new Map([["name",'oscar'],["age", 34]]);
console.log (entries);//Map(2) { 'name' => 'oscar', 'age' => 34 }
console.log(Object.fromEntries(entries));//{ name: 'oscar', age: 34 }