"use strict";

const shortcut = "Control";
const body = document.querySelector(".modal");
const notification = document.querySelector(".alert-hello");

document.addEventListener("keydown", function(event) {
  if(shortcut && event.key === "c" || shortcut && event.key === "C") {
    body.style.backgroundColor = "#60b347";
    console.log("djnclj")

  }else if(shortcut && event.key === "b" || shortcut && event.key === "B") {
    body.style.backgroundColor = "#222";

  }else if(shortcut && event.key === "q" || shortcut && event.key === "Q") {
    if(notification.classList.contains('hidden')){
      notification.classList.remove("hidden");
    }else{
      notification.classList.add("hidden");
    }
  }
})

notification.addEventListener("click", function(){
  notification.classList.add("hidden");
})