const arr = [1,2,3,4,5];
for(const x of arr){
    console.log(x);
}

// Map
const map = new Map();
map.set("username","Raj");
map["name"] = "Hitesh";
map["state"] = "Rajasthan";
console.log(map);
for([element,value] of map){
    console.log(element,"---->",value);
}
arr.forEach(function (item) {
    console.log(item)
});
arr.forEach((item) => console.log(item));