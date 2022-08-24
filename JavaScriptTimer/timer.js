let counter =0;
let timer;

window.onload=function(){
    document.querySelector("#id_h2").innerHTML = counter;
     newEvent()
    
}

function newEvent(){
    let play_btn = document.querySelector("#play_btn");
    let stop_btn = document.querySelector("#stop_btn");
    play_btn.addEventListener("click",play);
    stop_btn.addEventListener("click",stop);
}

function stop(){
clearInterval(timer);
}


function play(){
    clearInterval(timer);
    timer =setInterval(function(){
        counter++
        document.querySelector("#id_h2").innerHTML =counter;
        if(counter>=50)
        {
            clearInterval(timer);
        }
    },1500);
}