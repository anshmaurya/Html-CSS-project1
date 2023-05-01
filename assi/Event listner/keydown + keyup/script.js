let div = document.getElementById("div");
let display = document.getElementById("display");

//keyup event 
document.addEventListener("keyup", function (e) {
    display.style.color = "green";
    display.innerText = e.key + " is keyUp";
  });

//  keydown event 
document.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown";
});

