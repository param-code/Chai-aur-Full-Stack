function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName();
sayMyName();
sayMyName();
sayMyName();
sayMyName();

function loginMessage(username){
    return `${username} just logged in`;
}

console.log(loginMessage("Raj"));

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(100,200,300));