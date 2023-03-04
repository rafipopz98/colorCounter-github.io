// console.log("Hello ")
// let titleDiv=document.getElementById('title')
// console.log(titleDiv.innerText)
// let msg="jujuju"
// titleDiv.innerText=msg
// console.log(titleDiv.innerText)
// titleDiv.innerHTML=`<p>${msg}</p>`
let redColor=document.getElementById('red')
let yellowColor=document.getElementById('yellow')
let greenColor=document.getElementById('green')
// redColor.onclick=()=>console.log("red")
// yellowColor.onclick=()=>console.log("yellow")
// greenColor.onclick=()=>console.log("green")
const square=document.querySelectorAll('.colorsquare')
// console.log(square)
// square.forEach(squares=>console.log(squares.value))
const timesClicked={'red':0,'yellow':0,'green':0}
square.forEach(squares=>{
  squares.onclick=()=>{
    timesClicked[squares.value]+=1
    squares.innerText=timesClicked[squares.value]
  }
})
function clearscores(){
    timesClicked.red=0
    timesClicked.yellow=0
    timesClicked.green=0
     square.forEach(squares=>{
       squares.innerText=''
  })
}
let clear=document.getElementById('clear')
clear.onclick=()=>clearscores()
