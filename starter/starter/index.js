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

let maxVal = 0xFFFFFF; //  maximum value can be FFFFFF, adding 0x before a hexadec number
let randomNumber = Math.random() * maxVal;  // returns a floating point random number 

//document.getElementById("firstButt").style.backgroundColor="red";

//document.getElementById("secondButt").style.backgroundColor= "#" + randColor;

function randColors () {
    var circlesCollection = document.getElementsByClassName("randomColor");  //it is not actually and array, for loop fialed
    var circles = Array.from(circlesCollection)  //Array.from() converts an array-like structure to an actual array

    document.getElementById("firstButt").style.backgroundColor= "red";     //sytax used document.getElementById(id).style.property = new style
    circles.forEach(circle => {
        let randomNumber = Math.random() * maxVal;  // convert the floating-point number to an integer / using forEach loop on arrays
        randomNumber = Math.floor(randomNumber);
        let randColor = randomNumber.toString(16);  // converting of integer into hex 
        circle.style.backgroundColor= "#" + randColor;
    });
}

//document.getElementById('doSomething').addEventListener("click",randColors);


// #3:
// DO 22.3.: ISPUNI ARRAY arrText sa 10+ izjava/psovki/cinjenica - sto god zelis. + stvoriti svoju granu petra1 u gitu i na njoj raditi sve promjene u kodu
// Napomena -  proci sto je array, koja je razlika izmedju arraya i objekta u js-u
var arrText = [
    {text: "Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!"},
    {text: "With good program architecture debugging is a breeze, because bugs will be where they should be."},
    {text: "Never allow the same bug to bite you twice."},
    {text: "Without requirements or design, programming is the art of adding bugs to an empty text file."},
    {text: "If you automate a mess, you get an automated mess."},
    {text: "A computer once beat me at chess, but it was no match for me at kickboxing."},
    {text: "Engineers call them edge cases. I call them: what our users do."},
    {text: "Reminds me of the awesome bug report I saw once: ‘Everything is broken. Steps to reproduce: do anything. Expected result: it should work’."},
    {text: "Testers don’t like to break things; they like to dispel the illusion that things work."},
    {text: "All code is guilty until proven innocent."},
]
document.getElementById('text').innerHTML = arrText[0].text;


//#4 do 29.4. -> radis promjene na svojoj grani petra1, a da bi na nju dodala ove izmjene koje se nalaze na main, nakon sto se prebacis na petra1 odradis 
//naredbu git merge main (da ti se na petra1 prebace promjene sa main)
//nakon sto odradis zadatak, ides na git add -A, pa commit, pa push -u origin petra1, pa onda na githubu odradis onaj merge PR-a da sve prebacis i mergas sa main
//ZADATAK:
//napisi funckciju 'randomeText' koja ce klikom na button 'Try me punk' promjeniti text 
//oblik texta treba biti broj texta iz arraya + text quote, npr: 2. Never allow the same bug to bite you twice.
//ujedno, text koji se prikazuje treba biti nasumican

// function randomeText() {
//     const randomIndex = Math.floor(Math.random() * arrText.length)
//     const randomQuote = arrText[randomIndex];
//     const quoteElement = document.getElementById('text');
//     quoteElement.innerHTML  = randomIndex + 1 + '. ' + randomQuote.text; //adding +1 because array indexing starts at 0
// }
    
// NICE! ;) <3

//#5 -> git dio isto kao i prethodni put
// -> prilagodi funkciju randomeText tako da prikazuje samo izjave sa (oznacenim) parnim brojevima na frontu, a u console logu tekst sa neparnim brojevima

// solution using if...else statement 
function randomeText() {
    const randomIndex = Math.floor(Math.random() * arrText.length)
    const randomQuote = arrText[randomIndex];
    const quoteElement = document.getElementById('text');
    quoteElement.innerHTML = randomQuote.text;
    randColors();
}

// solution using switch statement 
/*function randomeText() {
    const randomIndex = Math.floor(Math.random() * arrText.length)
    const randomQuote = arrText[randomIndex];
    const quoteElement = document.getElementById('text');
    switch (randomIndex % 2) {
        case 0:
            quoteElement.innerHTML = randomIndex  + '. ' + randomQuote.text;
            break;
        case 1:
            console.log(randomIndex  + '. ' + randomQuote.text);
            break;
    }
}  */

//#6 -> do 3.5. (ako stignes prije-to bolje! ;) )
// -> trebas napraviti da kad se klikne add ili 'enter'  da se isprazni input field tako da se ne moze vise puta isti input dodati
// -> git uvijek isto ;) 

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
      if(inputValue===''){
        alert("Sometimes the smartest thing to do is to do nothing. Still, you have to write something.");
      } else {
        document.getElementById("tasks").appendChild(li);
        document.getElementById("input").value = '';  //input field will be cleared after add span is clicked, or the enter key is pressed
      }
    }
