class User{
    constructor(username) {
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password) {
        super(username);
        this.email  = email;
        this.password = password;
    }
    addCourse(){
        console.log(`New Course is Added by ${this.username}`);
    }
}
const chai = new Teacher("chai","chai@msft.com","123");
console.log(chai);
chai.addCourse();

const coffee = new User("caffeine");
coffee.logMe();