import './style.css'

const KEYUP = 38;
const KEYDOWN = 40;

const carEl = document.getElementById("car");
const speedEl = document.getElementById("speed");

carEl.style.top=0;
carEl.style.left=0;

let x = 0;
let y = 0;
let a = 0;

let isKeyUpPressed = false;
let isKeyDownPressed = false;

document.body.onkeydown = (event)=>{
  if(event.keyCode === KEYUP){
    isKeyUpPressed = true;
  }
  if(event.keyCode === KEYDOWN){
    isKeyDownPressed = true;
  }
}
document.body.onkeyup = (event)=>{
  if(event.keyCode === KEYUP){
    isKeyUpPressed = false;
  }
  if(event.keyCode === KEYDOWN){
    isKeyDownPressed = false;
  }
}

function render(){
  
  window.requestAnimationFrame(render);
  a += isKeyUpPressed ? 0.1 : 0;
  a -= isKeyDownPressed ? 0.2 : 0;
  speedEl.innerText = Math.round(a*10) + "км/ч"
  y += a;
  if(y > 1000){
    y = 1000;
    a = 0;
  }
  if(y < 0){
    y = 0;
    a = 0;
  }
  
  carEl.style.top = y +"px";  
}

render();
