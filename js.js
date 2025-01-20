document.addEventListener("keydown",function(event){

    event.preventDefault();
    // this.classList.add("pressed");
    if(event.key==='Alt'){
        if(event.location===1){
            document.querySelector(".Alt1").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
        }else if(event.location===2){
            document.querySelector(".Alt2").classList.add("pressed");
            keyDisplay(event.key);
            playSound();

        }
    }else if(event.key==='Control'){
        if(event.location===1){
            document.querySelector(".Control1").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
        }else if(event.location===2){
            document.querySelector(".Control2").classList.add("pressed");
            keyDisplay(event.key);
            playSound();

        }

    }else if(event.key==='Shift'){
        if(event.location===1){
            document.querySelector(".Shift1").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
        }else if(event.location===2){
            document.querySelector(".Shift2").classList.add("pressed");
            keyDisplay(event.key);
            playSound();

        }

    }else if(event.code==='Space'){
            document.querySelector(".space-key").classList.add("pressed");
            keyDisplay("SpaceBar");
            playSound();
    }else if(event.code==='Backquote'){
        document.querySelector(".Backquote").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }else if(event.code==='Semicolon'){
        document.querySelector(".Semicolon").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }else if(event.code==='Quote'){
        document.querySelector(".Quote").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }else if(event.code==='Comma'){
        document.querySelector(".Comma").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }else if(event.code==='Period'){
        document.querySelector(".Period").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }else if(event.code==='Slash'){
        document.querySelector(".Slash").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }
    else if(event.code==='BracketLeft'){
        document.querySelector(".BracketLeft").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }else if(event.code==='BracketRight'){
        document.querySelector(".BracketRight").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }else if(event.code==='Backslash'){
        document.querySelector(".Backslash").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }else if(event.code==='Minus'){
        document.querySelector(".Minus").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }else if(event.code==='Equal'){
        document.querySelector(".Equal").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }
    else if(event.code==='Pause'){
        document.querySelector(".Pause").classList.add("pressed");
        keyDisplay(event.key);
        playSound();
    }
    else{
        digitSwitch(event.key);
        Animation(event.key);
        
    }

}
);
function Animation(key){
   console.log(key);
   document.querySelector("."+key).classList.add("pressed");
   keyDisplay(event.key);
   playSound();
   
        
    
}
function digitSwitch(key){
    
    switch (key) {
        case '1':
            document.querySelector(".d1").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        case '2':
            document.querySelector(".d2").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        case '3':
            document.querySelector(".d3").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        case '4':
            document.querySelector(".d4").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        case '5':
            document.querySelector(".d5").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        case '6':
            document.querySelector(".d6").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        case '7':
            document.querySelector(".d7").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        case '8':
            document.querySelector(".d8").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        case '9':
            document.querySelector(".d9").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        case '0':
            document.querySelector(".d0").classList.add("pressed");
            keyDisplay(event.key);
            playSound();
            break;
        default:
            console.log("Wrong entry for :"+key);
            break;
    }

}
function playSound() {
    var play1 = new Audio("./kick-bass.mp3");
        play1.play();
}
function keyDisplay(key) {
        document.querySelector(".keypressed").innerHTML=key;
        document.querySelector(".keypressed").classList.add("glow");
}
