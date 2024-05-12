let selectItem1 = document.getElementById("select1");
let selectItem2 = document.getElementById("select2");
let selectItem3 = document.getElementById("select3");
let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let submitBtn =document.getElementById("submitBtn");
selectItem1.addEventListener("click",()=>{
    selectItem1.style.border="2px solid green"
    selectItem2.style.border="0.1px solid gray"
    selectItem3.style.border="0.1px solid gray"
    circle1.style.backgroundColor="green"
    circle2.style.backgroundColor="gray"
    circle3.style.backgroundColor="gray"

})
selectItem2.addEventListener("click",()=>{
    selectItem2.style.border="2px solid green"
    selectItem1.style.border="0.1px solid gray"
    selectItem3.style.border="0.1px solid gray"
    circle1.style.backgroundColor="gray"
    circle2.style.backgroundColor="green"
    circle3.style.backgroundColor="gray"

})
selectItem3.addEventListener("click",()=>{
    selectItem3.style.border="2px solid green"
    selectItem1.style.border="0.1px solid gray"
    selectItem2.style.border="0.1px solid gray"
    circle1.style.backgroundColor="gray"
    circle2.style.backgroundColor="gray"
    circle3.style.backgroundColor="green"

})
submitBtn.addEventListener("click",()=>{
    if(a.checked){
        alert("Answer Is Wrong!")
    }
     else if(b.checked){
        alert("Answer Is Right!")
    }
     else if(c.checked){
        alert("Answer Is Wrong!")
    }
    else{
        alert("Select an Option")
    }
})