const rgb=document.querySelector(".rgb")
const btn=document.querySelectorAll(".BTN")
const titleName=document.querySelector(".titleName")
let color=[];
var jj;
function rang(){
    for (let i = 0; i < btn.length; i++) {
        const r=Math.floor(Math.random()*256);
        const b=Math.floor(Math.random()*256);
        const g=Math.floor(Math.random()*256);
        let rangaka='rgb('+r+','+g+','+b+')';
        color.push(rangaka);
    }
}

function rightChoice(){
    const zhmara=Math.floor(Math.random()*color.length)
    const hama= color[zhmara];
    jj=color[zhmara];
    return hama;
}

function rgba(){
    rgb.textContent=rightChoice();
}

function h(){
    for (let i = 0; i < btn.length; i++) {
        btn[i].style.background=color[i];
    }
}

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click",function(){ 
            let hh=color[i]; 
            if(hh == jj){
                titleName.textContent="Pirooooooooooooooooooooooooooooza";
                for (let i = 0; i < btn.length; i++) {
                   btn[i].style.background=jj;    
                }
            }else{
                this.style.background="white";
            }
        })
    }


rang();
rightChoice()
h();
rgba()
