const but1=document.querySelector("#one")
const but2=document.querySelector("#two")
const but3=document.querySelector("#three")
const but4=document.querySelector("#four")
const but5=document.querySelector("#five")
const but6=document.querySelector("#six")
const but7=document.querySelector("#seven")
const but8=document.querySelector("#eight")
const but9=document.querySelector("#nine")
const but0=document.querySelector("#zero")
const op1=document.querySelector("#blush")
const op2=document.querySelector("#minus")
const op3=document.querySelector("#mul")
const op4=document.querySelector("#div")
const fine=document.querySelector("#finally")
const cleared=document.querySelector("#clear")
const result=document.querySelector("#input")
but1.addEventListener("click",(event)=>{
 
   result.value += '1'


})
but2.addEventListener("click",(event)=>{
 
   result.value += '2'


})
but3.addEventListener("click",(event)=>{
 
   result.value += '3'


})
but4.addEventListener("click",(event)=>{
 
   result.value += '4'


})
but5.addEventListener("click",(event)=>{
 
   result.value += '5'


})
but6.addEventListener("click",(event)=>{
 
   result.value += '6'


})
but7.addEventListener("click",(event)=>{
 
   result.value += '7'


})
but8.addEventListener("click",(event)=>{
 
   result.value += '8'


})
but9.addEventListener("click",(event)=>{
 
   result.value += '9'


})
but0.addEventListener("click",(event)=>{
 
   result.value += '0'


})
op1.addEventListener("click",(event)=>{
       result.value += '+'

})
op2.addEventListener("click",(event)=>{
       result.value += '-'

})
op3.addEventListener("click",(event)=>{
       result.value += '*'

})
op4.addEventListener("click",(event)=>{
       result.value += '/'

})
fine.addEventListener("click",(event)=>{

let results=eval(document.getElementById("input").value)

    result.value +="     "+results
   
 
})
 
cleared.addEventListener("click",(event)=>{

let cleared =document.getElementById("input").value=""

    
   
 
})
 