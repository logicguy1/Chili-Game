var Chocolates = 13;
var playerLastLick;

function Lick1Chocolate(){
    Chocolates--;
    playerLastLick = 1;
    console.log("1 Chocolate was taken");
}

function Lick2Chocolate(){
    Chocolates -= 2;
    playerLastLick = 2;
    console.log("2 Chocolate was taken");
}

function Lick3Chocolate(){
    Chocolates -= 3;
    playerLastLick = 3;
    console.log("3 Chocolate was taken");
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
