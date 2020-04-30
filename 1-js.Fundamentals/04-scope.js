let x = 12

   function scope() {
       let x = 33;
       console.log(x);
   }

   scope();
   console.log(x)

   let y = 12;

   function scope2() {
       y = 33;
       console.log(y);
   }

   scope2();
   console.log(y);
/* var scopes to the closets function block */
   var x = 12;

   function varTest() {
       var x = 33;
       if (true) {
           var x = 45;
           console.log(x);
        }
        console.log(x);
     }

     varTest();
     console.log(x);
 /* let scopes to the nearest and ending code block */ 
 let x = 12;
 
 function varTest() {
     let x = 33;
     if(true) {
         let x =45;
         console.log(x);
     }
     console.log(x);
    }    

varTest();
console.log(x);