console.log("this is string tutorial")
let a="harry"
for(i=0;i<=4;i++){
    console.log(a[i])
}
console.log(a.length)
// let name="harry";
let real_name="harry";
// name was global variable at once,so it is nor recommended to keep
let friend="Rohan";
console.log("my name is" +real_name +"my friend name is"+friend)
// another way:
console.log(`his name is${real_name} and his friend name is ${friend}`)
let b="shuvam"
let c="Abu Yousuf"

console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(1,3))
console.log(b.slice(3))
console.log(b.replace("Yo",3))
// we cant change string.and it is called immutibility of string;
// like:
let d ="Abu yousuf"
console.log(d);
console.log(d.toUpperCase());
// let d="abaggiii"
// SyntaxError: Identifier 'd' has already been declared