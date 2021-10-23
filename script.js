let generatedBody= document.querySelector("#mainBody");
const windowsBody=document.querySelector("#gradient")
let color1= document.getElementById("color1");
let color2= document.getElementById("color2");
let p= document.getElementById("colorRGB");
let randomBtn= document.getElementById("randomBtn");
let autoBtn= document.getElementById("autoBtn")
let stopBtn= document.getElementById("stopBtn");
const sidebar=document.getElementById("sidebar")
let mainRecentImage=sessionStorage.getItem("uploaded-image")
const selectBlend=document.getElementById("selectBlendMode")
const btnBack=document.getElementById("acceptImg")
const inputFile=document.getElementById("fileInput")
const removeBtn=document.getElementById("remove-button")
const selectSize=document.getElementById("selectBackgroundSize")
const closeBtn=document.getElementById("close-side")
const openBtn=document.getElementById("open-side")
const printBtn=document.getElementById("print-btn")
console.log(generatedBody.innerHTML)
console.log(document.body)



//*******SET COLOR GRADIENT AND IMAGE IF EXISTS IN THE BACKGROUND OF MAIN-DIV ****//

function setGradient() {
	generatedBody.style.background='url("'+mainRecentImage+'") ,linear-gradient(to right,'+color1.value+','+color2.value+')';
	generatedBody.style.backgroundBlendMode=selectBlend.value
	generatedBody.style.backgroundSize=selectSize.value
	generatedBody.style.backgroundRepeat="no-repeat"
  generatedBody.style.backgroundPosition="center"
	generatedBody.style.height="100%"
  p.innerText='linear-gradient(to right,'+color1.value+','+color2.value+')';
  // p.innerText=body.style.background;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

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
  setGradient();
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



imgUp=()=>{
	sessionStorage.removeItem("uploaded-image")

	const reader=new FileReader()
	console.log(reader)
	reader.addEventListener("load",()=>{
		sessionStorage.setItem("uploaded-image",reader.result);
		console.log(sessionStorage)

	})
	reader.readAsDataURL(inputFile.files[0])
}


ImgBackground=()=>{
	
	// const recentImage=localStorage.getItem("uploaded-image")
	var recentImage=sessionStorage.getItem("uploaded-image")
	mainRecentImage=recentImage
	

	if(recentImage){
		generatedBody.style.background='url("'+recentImage+'") ,linear-gradient(to right,'+color1.value+','+color2.value+')';
		generatedBody.style.backgroundBlendMode=selectBlend.value
		generatedBody.style.backgroundSize=selectSize.value
		generatedBody.style.backgroundRepeat="no-repeat"
    generatedBody.style.backgroundPosition="center"
		generatedBody.style.height="100%"
		// console.log(body.style)
	}


}


inputFile.addEventListener("change",imgUp)
btnBack.addEventListener("click",ImgBackground)
selectBlend.addEventListener("change",()=>{

	generatedBody.style.backgroundBlendMode=selectBlend.value
})
selectSize.addEventListener("change",()=>{
  generatedBody.style.backgroundSize=selectSize.value
})



//*** REMOVE IMAGE FROM SESSION STORAGE AND RERENDER THE BROWSER ******//
removeBtn.addEventListener("click",()=>{
  sessionStorage.clear()
  location.reload()
})



//***CLOSE SIDE NAV ***** */
closeBtn.addEventListener("click",()=>{
  sidebar.style.width=0;
  openBtn.style.display="block"

})

//*****OPEN SIDE NAV ******/
openBtn.addEventListener("click",()=>{
  sidebar.style.width="25%"
  openBtn.style.display="none"
})


//*******PRINT BACKGROUND ******/

printBtn.addEventListener("click",()=>{
window.print()
})