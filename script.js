"use strict"

var display = document.getElementById("display")
var buttons = document.getElementsByClassName("button")



for(var x of buttons){
    x.addEventListener("click",function(){
        switch(this.innerText){
            case "c": display.innerText = "";
            break;
            case "=": if(display.innerText){
                display.innerText = eval(display.innerText)
            }
            break;
            case "←": if(display.innerText){
                display.innerText = display.innerText.slice(0, -1)
            }
            break;
            default: display.innerText += this.innerText
        }
    })
}