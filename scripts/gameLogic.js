var Chocolates = 13;
var playerLastLick;

function LickChocolate(Count){
    Chocolates -= Count;
    playerLastLick = Count;
    console.log(Count + " Chocolate was taken");
    UpdateCounter(Chocolates)
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
    document.getElementById("chocolateCounter").innerHTML = Chocolates
}
