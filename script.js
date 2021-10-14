let body= document.querySelector("body");
let color1= document.getElementById("color1");
let color2= document.getElementById("color2");
let p= document.getElementById("colorRGB");
let randomBtn= document.getElementById("randomBtn");
let autoBtn= document.getElementById("autoBtn")
let stopBtn= document.getElementById("stopBtn");




colorGradient= () =>{
  body.style.background=`linear-gradient(to right,${color1.value},${color2.value})`;
  p.innerText=body.style.background;
}



color1.addEventListener("input",colorGradient);
color2.addEventListener("input",colorGradient);

//***RANDOM-PICK***//

randomColor=()=>{
  var hexNumber="0123456789ABCDEF"
  var newColor="#"
  for(let i=0;i<6;i++){
    newColor+=hexNumber[Math.floor(Math.random()*16)]; 
  }
return newColor}

randomColorPick=()=>{
  color1.value=randomColor();
  color2.value=randomColor();
  colorGradient();
}

  //**AUTO PLAY**//
autoColorDisplay=()=>{
  var repeat=setInterval(function(){
  for (var i=0;i<255;i++){
  if(i==255){
      i=0}
   randomColorPick()}
  },1000)
  //**STOP AUTO-PLAY**//
  stopBtn.addEventListener("click",()=>{
            clearInterval(repeat);});
}





randomBtn.addEventListener("click",randomColorPick);
autoBtn.addEventListener("click",autoColorDisplay)