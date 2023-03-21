window.onload = function() {
  let body = document.querySelector("body");
  
  body.onkeydown = function() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  };
  body.onkeyup = function() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  };
  body.onmousemove = function() {
    body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    body.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
  };
};