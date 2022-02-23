var btn1 = document.getElementsByClassName("bt1");

function show_game(){
  var game = document.getElementsByClassName("game")[0];
  var menu = document.getElementsByClassName("main")[0];

  console.log(menu);

  menu.style.visibility = "hidden";
  game.style.visibility = "visible";
}

function show_rules(){
  var btn2 = document.getElementById("rules");
  btn2.style.visibility = "visible";
  btn2.style.animation="appear .5s ease";
  console.log("YEEEAAA");
  GAMEStart();
  console.log("YOO");
}

function hide_rules(){
  var btn2 = document.getElementById("rules");
  btn2.style.visibility = "hidden";
  btn2.style.animation="";
}
