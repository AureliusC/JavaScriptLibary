// variable   fat arrow 
 let hi = () => {
     console.log(`hi`);
 }

 // arrow functions were introduced in ES6. They are basically a more  consscice way to write function expression Not declarations
 // this means arrow functions do get hoisted

 // BLOCK BODY 
 let hi = () => {
     console.log(`hi`);
     //lots of code goes here

     //return goes here
 }
 // NOTE: block body arrow functions must have a return (if you want to get back information) in the body of the function
 // (return must be in between the curly braces)

 //CONCISE BODY
 let hi = () => console.log(`hi`);
 // NOTE: concise body arrow functions return  by default; they automatically give back the information

 let greeting = ( firstName, lastName) => {
     console.log(`Greetings, ${firstName} ${lastName}`)
 }

// NOTE: when you have no or multiple parameters, you must include parenthesis; however when you have a single parameter the parenthesis are optional

 greeting(`Aurelius`, `Eggerly`)