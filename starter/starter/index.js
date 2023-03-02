//1: postavi github repo DONE

//2: napisi funkciju koja ce, nakon sto se klikne Button, u console logu svaki put prikazati neki randome broj
console.log("Hello");


// solution #1
/*document.getElementById('doSomething').addEventListener("click", () => {  //addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
    function numberGenarator(min, max){
        return Math.floor(Math.random() * (max - min) + min);
        }
    
console.log(numberGenarator(0,9999)); });*/


// solution #2
let button = document.getElementById('doSomething');
    button.onclick = () => { //button.onclick function is a callback function.
        
numberGenerator(0, 9999);
    };

var numberGenerator = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
};
