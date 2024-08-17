const jsUser = {
    name : "Hitesh",
    channel:"ChaiaurCode",
    email:"hitesh@gmail.com",
    age:18,
    isLoggedIn: true,
}
console.log(jsUser.channel);

const obj1 = {1:'a',2:'b',3:'c'};
const obj2 = {4:'a',5:'b',6:'c'};
const objboth = Object.assign({},obj1,obj2); // Object.assign(target,...source)
console.log(objboth);
const obj3 = {...obj1,...obj2};
console.log(obj3);
console.log(Object.keys(obj3));

// Destructring
const {name:naam} = jsUser;
console.log(naam);