const arr = [2,3,4,5];
console.log(arr.splice(0,1)); // splice takes these element [from 0 to 1] and eats it up
console.log(arr);
const hero = ["Human","Raj","Boy"];
const heroine = ["Riya","Divya","Ana"];
const all = [...hero,...heroine]; // it spreads the elements of both in this array
console.log(all);

const test = [1,2,3,[4,5],6,7,[8,9,[5,6,[7,8]]],0];
const special = test.flat(Infinity);
console.log(`Old array is ${test} \n and new array is ${special}`);
console.log(test);
console.log(special);