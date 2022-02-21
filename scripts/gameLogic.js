
var Chocolates = 13;
var playerLastLick;

function Lick1Chocolate(){
    Chocolates--;
    playerLastLick = 1;
}

function Lick2Chocolates(){
    Chocolates -= 2;
    playerLastLick = 2;
}

function Lick3Chocolates(){
    Chocolates -= 3;
    
    playerLastLick = 3;
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


