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
/*let button = document.getElementById('doSomething');
    button.onclick = () => { //button.onclick function is a callback function.
        
numberGenerator(0, 9999);
    };

var numberGenerator = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
};*/


//3a: napisi funkciju tako da kad se klikne na 'Do Something' button se promjeni background boja ostalih buttona
//boja moze biti randome ili tocno odredjena - jedini je uvijet da svaki button ima drugu boju 

//3b: kad se hovera preko dodanih buttona - background boja 'nestane'
document.getElementById("firstButt").style.backgroundColor= "red";     //sytax used document.getElementById(id).style.property = new style



let maxVal = 0xFFFFFF; //  maximum value can be FFFFFF, adding 0x before a hexadec number
let randomNumber = Math.random() * maxVal;  // returns a floating point random number 

// convert the floating-point number to an integer 
randomNumber = Math.floor(randomNumber);
let randColor = randomNumber.toString(16);  // converting of integer into hex 




//document.getElementById("secondButt").style.backgroundColor= "#" + randColor;

function randColors () {
    var circlesCollection = document.getElementsByClassName("randomColor");
    var circles = Array.from(circlesCollection)
    console.log(circles);

    circles.forEach(circle => {
        let randomNumber = Math.random() * maxVal;  // returns a floating point random number 

    // convert the floating-point number to an integer 
    randomNumber = Math.floor(randomNumber);
        let randColor = randomNumber.toString(16);  // converting of integer into hex 

        circle.style.backgroundColor= "#" + randColor;
    });
    
   
}

randColors();

