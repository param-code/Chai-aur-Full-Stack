class User{
    constructor(username,password) {
        this.username = username;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}
const hitesh = new User("Hitesh","Divya");
console.log(hitesh.password);