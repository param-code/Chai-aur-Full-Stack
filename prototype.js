const newHero = [];
let myName = "Hitesh       ";
// console.log(myName.trim().length);
// console.log(myName.truelength);
// function String.prototype.truelength(){
//     return this.trim().length;
// }
let myHeroes = ["Thor","Natasha","Spider-man","Dr. Strange"];
let heroPower = {
    Thor:"hammer",
    Spiderman:"Sling",
    Natasha:"Martial Arts",
    Strange:"Magical Eye",
    getSpiderManPower:function (){
        console.log(`Spider-Man power is ${this.Spiderman}`)
    }
}
// heroPower.getSpiderManPower();
Object.prototype.hitesh = ()=>console.log("Hitesh is present in all objects");
// heroPower.hitesh();
// myName.hitesh();
Array.prototype.heyhitesh = ()=>console.log("Hey Hitesh is present only in array prototype");
// myHeroes.heyhitesh();

const User = {
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo:true
}
const TeachingAssist = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingAssist
}
// Teacher.__proto__ = User;
Object.setPrototypeOf(Teacher,TeachingAssist);

let anotherUserName = "ChaiaurCode         ";
String.prototype.truelength = function(){ return this.trim().length;
};
console.log(anotherUserName.truelength());