let weather = 65;

if (weather < 70) {
    console.log("Wear a jacket");
} else {
     console.log("No jacket necessary");
}

/*
CHALLENGE
************
​
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?' */

    let name = "Aurelius"
    if(name =="Aurlius"){
        console.log(name);
    } else {
        console.log("Hello, what is your name?");
    }

      /* silver:
    If It is your name, console log 'Hello, my name is <name>' */

    
​let name = "Aurelius";
if (name == "Aurelius"){
    console.log(`Hello, my name is ${name}`);
 } else {
    console.log('Hello, my name is ${name}');
}


 /*  Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = "Aurelius";
if (name == "Aurelius"){
    console.log(`Hello, is your name' ${name}`);
} else {
    console.log("Hello, is your name " + name);
}


let name = 'zAchARy'
if(name[0] === name[0].toUpperCase()) {
   console.log(name);  
} else {
    console.log(" hey this isn't written correctly");
}

let name = 'zAchARy';
if(name[0] === name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase())
}


let name = 'zAchARy';
if(name[0] === name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
      console.log(isUpperCase);
} else {
    let notUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(notUpperCase);
}








int x = 17;
int y= 22;
if (age >= 25){
    console.log(' soory, youre too young to do anything.');
} else if (age >= 21){
    console.log('you can vote');
}