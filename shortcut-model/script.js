"use strict";

const shortcut = "Control";
const body = document.querySelector(".modal");
const notification = document.querySelector(".alert-hello");

document.addEventListener("keydown", function(event) {
  const shortcutkeys = event.key.toLowerCase();
  if(shortcut && shortcutkeys === "c") {
    body.style.backgroundColor = "#60b347";
    console.log("djnclj")

  }else if(shortcut && shortcutkeys === "b") {
    body.style.backgroundColor = "#222";

  }else if(shortcut && shortcutkeys === "q") {
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