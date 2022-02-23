setTimeout(() => {  START(); }, 10);
var Chocolates = 13;
var playerLastLick;



function START(){
    UpdateCounter(Chocolates);
}

function PageLoad(){

}


function LickChocolate(Count){
    Chocolates -= Count;
    playerLastLick = Count;
    console.log(Count + " Chocolate was taken");
    UpdateCounter(Chocolates);
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
    console.log("JJJK")
    document.getElementById("chocolateCounter").innerHTML = Chocolates;
}



