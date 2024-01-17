let said = document.getElementById("said")
let saalali = document.getElementById("saalali")
let send = document.getElementById("btn")
let boit = document.getElementById("boit")
let inpt = document.getElementById("inpt")
let clear = document.getElementById("btn2")
let disp = document.querySelector(".dispp")
let user = "said"
let x=0
said.addEventListener("click",function(){
 user = "said"
 saalali.style.backgroundColor = "rgb(42, 42, 42)"
 said.style.backgroundColor = "blue"
 console.log(user)
})
saalali.addEventListener("click",function(){
 user = "saalali"
 saalali.style.backgroundColor = "blue"
 said.style.backgroundColor = "rgb(42, 42, 42)"
 console.log(user)
})
send.addEventListener("click",function(){
 let time = new Date()
 if(inpt.value !== ""){
 if(user == "said"){
 let div = document.createElement("div")
 div.classList.add("said-message")
 div.textContent = inpt.value +" "+ time.getHours()+ ":"+ time.getMinutes()
 disp.appendChild(div)
 inpt.value = ""
 }
 if(user == "saalali"){
  let div = document.createElement("div")
  div.classList.add("saalali-message")
  div.textContent = inpt.value +" "+time.getHours()+ ":"+ time.getMinutes()
  disp.appendChild(div)
  inpt.value = ""
  }}
})
clear.addEventListener("click", function(){
 disp.innerHTML = ""
})


