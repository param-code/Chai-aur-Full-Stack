function setUserName(username){
    this.username = username;
    console.log("Success");
}
function createUser(username,email,password){
    // this.username = username;
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}
const chai = new createUser("chai","chai@fb.com","123");1
console.log(chai);