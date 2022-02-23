setTimeout(() => {  START(); }, 10);
var Chocolates = 13;
var playerLastLick;
const textDisplay = ["Dette er linje 1", "Linje 2 her", "Hej, jeg er en linje. linje nr. 3", "Din mor lugter af nugga, og jeg lugter af 4", "ehhhhhh 5", "SEX SEX SEX, nr fucking sex"]


var textDisplayCount = 0;
function START(){
    console.log("GAME PAGE LOADED")
    UpdateCounter(Chocolates);
    UpdateTextDisplay();
}

function UpdateTextDisplay(){
    textDisplay.forEach(element => {
        //console.log("COUNT:" + textDisplayCount + " " + "Line" + textDisplayCount + "Text" + " :: " + element);
        document.getElementById("Line" + textDisplayCount + "Text").innerHTML = element;
        textDisplayCount++;
    });
    textDisplayCount = 0;
}

function addTextLine(TEXT){
    textDisplay.push(TEXT);
    textDisplay.shift();
    UpdateTextDisplay();
}


function PageLoad(){

}


function LickChocolate(Count){
    Chocolates -= Count;
    playerLastLick = Count;
    console.log(Count + " Chocolate was taken");
    UpdateCounter(Chocolates);
    addTextLine(Count + " Chocolates where taken from the jar, " + Chocolates + " Chocolates are left.")
}


function PlayerTurn(){
    NormalizeButtons();

    GrayoutButtons();
}

function ComputerTurn(){
    var Take = 4 - playerLastLick;
}


function NormalizeButtons(){
    //function der gør knapperne den rigtige farve igen
}


function GrayoutButtons(){
    //function der gør knapperne grå
}

function UpdateCounter(Chocolates){
    document.getElementById("chocolateCounter").innerHTML = Chocolates;
}



