let number = 5;

switch(officeCharacter){
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
        default:
        console.log(`I'm sorry, ${officeCharacter}, but so i know you`);
                    
}

/*
CHALLENGE
************
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "pie";

switch(dessert) {
    case "pie":
        console.log("pie, pie, me oh my!");
        break;
    case "cake":
        console.log("cake is great");
        break;
    case "ice cream":
        console.log("I scream for ice cream");
        break;
    default:
        console.log("not on the menu"); 
}