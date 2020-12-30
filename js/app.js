// part 1 
function pr(name){
    return typeof name;
}
let string = pr("ismail");
let num = parseInt(string);
let bool = !!parseInt(string);
console.log(typeof string);
console.log(typeof bool);
 console.log(typeof num);
string = undefined;
console.log(string);
// i dont know to to convert string to object sorry :(
