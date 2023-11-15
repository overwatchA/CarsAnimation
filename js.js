var fondo = document.querySelector(".container")
var carro = document.querySelector(".carro")
var rueda1 = document.querySelector(".rueda1")
var rueda2 = document.querySelector(".rueda2") 
var polvo = document.querySelector(".cajaPolvo")

carro.addEventListener('click', move)


function move(){
   fondo.style.animationName ='fondo-move';
   carro.style.animationName ='carro-jump';
   rueda1.style.animationName ='rueda-jump';
   rueda2.style.animationName ='rueda-jump';
   polvo.style.animationName ='polvo';
}