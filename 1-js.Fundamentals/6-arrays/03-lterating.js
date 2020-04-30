let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// for (let i = 0; i < food.length; i++){
   // console.log(food[i]);
// }

food.forEach((foodItem, i) =>  console.log(i,(foodItem));


/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = [ 
"Black Panther",
"End Game",
"Spider Man",
"Ant Man",
"Venom",
"solo",
"A New Hope",
"Rogue One",
];

movies.push("DrumLine");
movies.splices(5,1,"Fast and Furious")

movies.forEach((movie, i) =>
console.log(i, movie));
