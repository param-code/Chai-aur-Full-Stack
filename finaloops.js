console.log(Math.PI);
const descriptor = Object.getOwnPropertyDescriptor(Math,'PI');
console.log(descriptor);

const chai = {
    name:'ginger',
    price:25,
    isAvailable: true
}
// chai.price = 250;
console.log(chai.price);
// console.log(Object.getOwnPropertyDescriptor(chai,"price").configurable = false);
console.log(Object.getOwnPropertyDescriptor(chai,"price"));
Object.defineProperty(chai,"price",{writable:false,enumerable:false,configurable:false});
console.log(Object.getOwnPropertyDescriptor(chai,"price"));
chai.price = 250;
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"price"));