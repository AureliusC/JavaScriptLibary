function hi() {
    console.log('HI');
}

hi;
hi();
console.log(hi);
console.log(hi());

/*
CHALLENGE
************
- Create a function that, when invoked, lists out the numbers 1-10
*/

function oneToTen(){
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
};

oneToTen();

/*
CHALLENGE
**********
- Given the array, create a function that console.log's the valus individually */


let arr = [`This`, `is`, `really`,`cool`];
function call() {
    for (let item of arr){
        console.log(item);
    }
};

call();