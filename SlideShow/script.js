const element = document.querySelectorAll(".slideshow-element");
var count = 1;
setInterval(()=>{
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    count++;
    if(count > element.length){
        element[0].classList.add("current");
        count = 1;
    }
    else{
        currentElement.nextElementSibling.classList.add("current");
    }
},2000);