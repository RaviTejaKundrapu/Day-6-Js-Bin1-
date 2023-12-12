let headEl= document.getElementById('head')
let button = document.getElementById("removeStyle")



// <!--topic no 1 adding css to js elements -->
headEl.classList.add("headingStyleAdd")

//topic 2: removing styles
let conditionapplying = true

button.onclick = function(){
  
  // used strict === here u can also use == but conditions apply 
 if (conditionapplying===true) { 
  headEl.classList.remove("headingStyleAdd")
  headEl.classList.add("headingStyleRemoveandManipulate")
  headEl.textContent = "Rajesh V"
  button.textContent = "Changed Successfully"
  conditionapplying = false
 }
 
 else if(conditionapplying===false){
   headEl.classList.add("headingStyleAdd")
   headEl.textContent = "Learning Javascript"
   button.textContent = "Changed to Back"
   conditionapplying = true
 }
 
}
