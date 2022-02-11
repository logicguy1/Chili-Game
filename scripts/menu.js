var btn1 = document.getElementsByClassName("bt1");

function script(){
  console.log("Button pressed");

  
}

function show_rules(){
  var btn2 = document.getElementById("rules");
  btn2.style.visibility = "visible";
  btn2.style.animation="appear .5s ease";
}

function hide_rules(){
  var btn2 = document.getElementById("rules");
  btn2.style.visibility = "hidden";
  btn2.style.animation="";
}
