const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const x = nums.filter((num)=>num > 4);
x.forEach((num)=>console.log(num));
console.log(nums.filter((num)=>!(num%2)));
console.log(nums.map((element)=>element+25));
const next = [1,2,3].reduce((acc,curr)=>acc+curr);
console.log(next);