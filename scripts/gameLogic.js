console.log(document.getElementsByClassName("TakeButton"))

setTimeout(() => {  START(); }, 10);
var Chocolates = 13;
var playerLastLick;
const textDisplay = ["|", "|", "|", "|", "|", "|"]
var AcceptButtonPush = true;


var textDisplayCount = 0;
function START(){
    console.log("GAME PAGE LOADED")
    UpdateCounter(Chocolates);
    UpdateTextDisplay();
    GrayoutButtons();
}



// TURNS

function FIRSTPLAY(){
    Chocolates -= 1;
    addTextLine("The computer decided to take 1 chocolate")
    UpdateCounter();
    NormalizeButtons();
}

function LickChocolate(Count){
    if(AcceptButtonPush == true){
        Chocolates -= Count;
        playerLastLick = Count;
        console.log(Count + " Chocolate was taken");
        UpdateCounter(Chocolates);
        addTextLine(Count + " Chocolates where taken from the jar, " + Chocolates + " chocolates are left.");
        PlayerTurn();
    }
    
}

function PlayerTurn(){
    GrayoutButtons();
    setTimeout(() => {  StartComputerTurn(); }, 400);
    console.log("Player Turn End");    
}

function StartComputerTurn(){
    addTextLine("The computer is thinking...")
    setTimeout(() => {  ComputerTurn(); }, 1500);
}

function ComputerTurn(){
    Take = 4 - playerLastLick;
    Chocolates -= Take;
    addTextLine("The computer decided to take " + Take + " chocolates")
    UpdateCounter();
    NormalizeButtons();
    CheckForLoss();
}



//
//HELP Functions    --    TOOLS


function ToggleHandOut(){
    document.getElementsByClassName("TakeButton")[0].style.animation = "HandToggleOut 0.4s linear forwards";
    document.getElementsByClassName("TakeButton")[1].style.animation = "HandToggleOut 0.4s linear forwards";
    document.getElementsByClassName("TakeButton")[2].style.animation = "HandToggleOut 0.4s linear forwards";
}
function ToggleHandIn(){
    document.getElementsByClassName("TakeButton")[0].style.animation = "HandToggleIn 0.4s linear forwards";
    document.getElementsByClassName("TakeButton")[1].style.animation = "HandToggleIn 0.4s linear forwards";
    document.getElementsByClassName("TakeButton")[2].style.animation = "HandToggleIn 0.4s linear forwards";
}


function NormalizeButtons(){
    AcceptButtonPush = true;
    ToggleHandOut();
    console.log("Buttons enabled");

}

function GrayoutButtons(){
    AcceptButtonPush = false;
    ToggleHandIn();
    console.log("Buttons disabled");
}

function UpdateCounter(){
    document.getElementById("chocolateCounter").innerHTML = Chocolates;
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
    textDisplay.push("| " + TEXT);
    textDisplay.shift();
    UpdateTextDisplay();
}




// YOU LOST FUNCTION

function CheckForLoss(){
    if(Chocolates <= 0){
        setTimeout(() => {  GameOver(); }, 400);
        GrayoutButtons();
    }
}

function GameOver(){
    alert("Game Over, noob");
}