//1: postavi github repo DONE

//2: napisi funkciju koja ce, nakon sto se klikne Button, u console logu svaki put prikazati neki randome broj
console.log("Hello");


/* var button = document.getElementsByTagName("doSomething");
 console.log(button);*/

 function numberGenarator(min, max){
   // return number = Math.floor(Math.random()*1000);
   return Math.floor(Math.random() * (max - min) + min);
 }
 console.log(numberGenarator(0,9999));