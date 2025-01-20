document.addEventListener("keydown",function(event){

    Animation(event.key);
    var play1 = new Audio("./sounds/snare.mp3");
    play1.play();

}
);
function Animation(key){
    document.querySelector("."+key).classList.add("pressed");
}
