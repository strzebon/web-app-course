let ball = document.querySelector("#ball");
let board = document.querySelector("#board");
let info = document.querySelector("#info");
let rect = board.getBoundingClientRect();
ball.style.top = rect.top + "px";
ball.style.left = rect.left + "px";
document.addEventListener("click", (event) => {
    let rect = board.getBoundingClientRect();
    info.style.display = "none";
    let x = event.clientX;
    let y = event.clientY;
    if(x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom){
        ball.style.left = x - 15 + "px";
        ball.style.top = y - 15 + "px"; 
    }
    else{
        info.style.left = x + "px";
        info.style.top = y + "px";
        info.style.display = "block";
    }
});