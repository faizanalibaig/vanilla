"use strict"

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const openBtn = document.querySelectorAll(".show-modal");

function showModal(){
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal(){
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

openBtn.forEach(btn => {
  btn.addEventListener("click", function(){
    showModal();
  })
})

closeBtn.addEventListener("click", function(){
  closeModal();
})

overlay.addEventListener("click", function(){
  closeModal();
})

document.addEventListener("keydown", function(e){
  if(e.key === "Escape" && !modal.classList.contains("hidden")){
     closeModal();
  }
})
