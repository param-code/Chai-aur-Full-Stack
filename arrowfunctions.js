const user = {
    name:"Hitesh",
    age:23,
    welcomeMessage:function (){
        console.log(`${this.name},Welcome to the Website`)
    }
}
user.welcomeMessage();

const message = () => { // Arrow Functions
    console.log("Hello,Man");
}
message();