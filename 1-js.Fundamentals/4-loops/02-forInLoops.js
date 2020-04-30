let student = {
    name: "Peter",
    awsome: true,
    degree: "JavaScript",
    week: 1
}

for (let item in student){
    console.log(item);
    console.log(student[item])
}

let catArray = ["tabby", "britsh shorthair", "burmese", "maine coon", "rag doll"];

for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

/*
CHALLENGE
************
​
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/


let name = "aUreLius";
let capName;

for (let l in name){
    if( l == 0) {
        capName = name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    }
}
console.log(capName);
// For in looks at enumerable properties