let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
document.addEventListener("keypress",function(){
   if(started == false){
     started = true;
     levelup();
   }
});
let btns = ["yellow","red","purple","green"];

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },250);
}

let h2 = document.querySelector("h2");

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomind = Math.floor(Math.random()*4);
    let randomcolor = btns[randomind];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);  
    gameflash(randombtn);
}

function CheckAns(ind){
    if(gameSeq[ind] == userSeq[ind]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game Over! your score is <b>${level}</b> <br> press any key to restart the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    CheckAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
     gameSeq = [];
     userSeq = [];
     started = false;
     level = 0; 
}










