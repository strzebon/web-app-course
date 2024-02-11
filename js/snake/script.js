let best = 0
function loaded(){
    let width = 400
    let height = 400
    let canvas = document.getElementById("canvasik") 
    let ctx = canvas.getContext("2d")
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, width, height)
    let box = document.getElementById("box")
    box.style.fontSize = "45px"
    box.innerText = "Press space to start"
    let left = document.getElementById("left")
    let right = document.getElementById("right")
    left.innerText = "Best: " + best
    right.innerText = "Score: 0"

    document.addEventListener("keydown", spacja)
}

function spacja(Event){
    if(Event.code == "Space"){
        document.removeEventListener("keydown", spacja)
        box.innerText = ""
        clicked()
    }

}

function clicked(){
    let right = document.getElementById("right")
    let score = 0
    let canvas = document.getElementById("canvasik") 
    let ctx = canvas.getContext("2d")
    let width = 400
    let height = 400
    let a = 20
    let b = 20
    let l = 1
    let moves = []
    let nextMove = {x: a, y: 0}
    let last = {x: a, y: 0}
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, l*a, l*b)
    let apple = {x: a*Math.floor(Math.random()*width/a), y: b*Math.floor(Math.random()*height/b)}
    let tab = []
    tab.push({x: 0, y: 0})
    let tail, head
    document.addEventListener("keydown", (key) => {
        switch (key.key) {
            case "ArrowRight":
                if(last.x == 0) {
                    last = {x: a, y: 0}
                    moves.push(last)
                }
                break;
            case "ArrowDown":
                if(last.y == 0) {
                    last = {x: 0, y: b}
                    moves.push(last)
                }
                break;
            case "ArrowLeft":
                if(last.x == 0) {
                    last = {x: -a, y: 0}
                    moves.push(last)
                }
                break;
            case "ArrowUp":
                if(last.y == 0) {
                    last = {x: 0, y: -b}
                    moves.push(last)
                }
                break;
            default:
                break;
        }
    })
    let licznik = setInterval(() =>{
        if(moves.length > 0){
            nextMove = moves.shift()
        }
        tail = {x: tab[0].x, y: tab[0].y}
        head = {x: tab[l-1].x + nextMove.x, y: tab[l-1].y + nextMove.y}
        if(head.x < 0 || head.x == width || head.y < 0 || head.y == height){
            if(best < score){
                best = score
            }
            clearInterval(licznik)
            gameOver()
            return
        }
        for(let i=1; i<l; i++){
            if(head.x == tab[i].x && head.y == tab[i].y){
                clearInterval(licznik)
                gameOver()
                return
            }
        }
        if (head.x == apple.x && head.y == apple.y){
            apple = {x: a*Math.floor(Math.random()*width/a), y: b*Math.floor(Math.random()*height/b)}
            l++
            score++
            right.innerText = "Score: " + score
        }
        else{
            ctx.clearRect(tail.x, tail.y, a, b)
            tab.shift()
        }
        ctx.fillStyle = "green"
        ctx.fillRect(head.x, head.y, a, b)
        tab.push({x: head.x, y: head.y})
        ctx.fillStyle = "red"
        ctx.fillRect(apple.x, apple.y, a, b)
        // ctx.arc(apple.x + 12.5, apple.y + 12.5, 12.5, 0, 2*Math.PI)
        // ctx.fillStyle = "red"
        // ctx.fill()
    }, 100)
}
function gameOver(){
    let box = document.getElementById("box")
    box.innerText = "GAME OVER"
    box.style.fontSize = "60px"
    setTimeout(loaded, 3000)
}