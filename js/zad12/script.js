let board = document.querySelector("#board");
let cursor = document.querySelector("#cursor");
let score = document.querySelector("#score");
let health = document.querySelector("#health");
let topSection = document.querySelector("#topSection");
let end = document.querySelector("#end");
let start = document.querySelector("#start");
let yourScore = document.querySelector("#yourScore");
let nick = document.querySelector("#nick");
let input_ = document.querySelector("#input_");
let first = document.querySelector("#first");
let ranking = document.querySelector("#ranking");
let game;
let points;
let lives;

board.addEventListener("mousemove", (event) => {
    cursor.style.top = event.pageY - 10 + "px";
    cursor.style.left = event.pageX - 10 + "px";
});

function createZombie(){
    let zombie = document.createElement("div");
    zombie.classList.add("zombie");
    let scale = Math.random()/2 + 0.5;
    let bottom = Math.random()*10;

    zombie.style.left = "110%";
    zombie.style.transform = "scale(" + scale + ")";
    zombie.style.bottom = bottom + "%";

    zombie.addEventListener("click", (event) => {
        zombie.style.display = "none";
        points += 12;
        updateScore(points);
        event.stopPropagation();
    })

    board.appendChild(zombie);
    animateZombie(zombie);
}

function animateZombie(zombie){
    let speed = Math.floor(Math.random() * 5);
    let durations = [5, 4.25, 3.5, 2.75, 2];
    let times = [50, 40, 30, 20, 10];
    let position = 0;

    zombie.style.transitionDuration = durations[speed] + "s";
    setTimeout(() => {
        zombie.style.left = "-300px";
    }, 500);

    let interval = setInterval(() => {
        position -= 200;
        zombie.style.backgroundPositionX = position + "px";
    }, times[speed]);

    setTimeout(() => {
        board.removeChild(zombie);
        clearInterval(interval);

        if(zombie.style.display != "none"){
            upadateHealth();
            if(lives == 0){
                clearInterval(game);
                let zombies = document.querySelectorAll(".zombie");
                for (let x of zombies){
                    x.style.display = "none";
                }
                board.style.cursor = "default";
                cursor.style.display = "none";
                start.style.display = "flex";
                buttonPlay.innerText = "Play again";
                end.style.display = "flex";
                yourScore.innerText = "Score: " + points;
                topSection.style.display = "none";
                board.removeEventListener("click", miss);

                getApi().then(data => {
                    let leaderboard = data;
                    updateHighscores(leaderboard);
                });
            }
        }
    }, durations[speed] * 1000 + 500);

}

function updateScore(){
    score.innerText = ""
    let text = Math.abs(points).toString();
    if(points < 0){
        score.innerText += "-";
    }
    for(let i=0; i<5-text.length; i++){
        score.innerText += "0";
    }
    score.innerText += text;
}

function upadateHealth(){
    lives -= 1;
    health.innerText = "";
    for(let i=0; i<lives; i++){
        health.innerText += "♥";
    }
}

function miss(){
    points -= 6;
    updateScore(points);
}

let buttonPlay = document.querySelector("#buttonPlay");

buttonPlay.addEventListener("click", (event) => {
    board.addEventListener("click", miss);
    nick.innerText = input_.value;
    first.style.display = "none";
    start.style.display = "none";
    topSection.style.display = "flex";
    points = 0;
    lives = 3;
    board.style.cursor = "none";
    cursor.style.display = "block";
    health.innerText = "♥♥♥";
    score.innerText = "00000";

    game = setInterval(() => {
        createZombie();
    }, 800);
    event.stopPropagation();
});

// <--- ASYNC FUNCTIONS --->
const API_URL = "https://jsonblob.com/api/jsonBlob/1044002415187345408";
async function getApi(){
    try{
        const response = await fetch(API_URL)
        const data = await response.json();
        return data;
    }
    catch(err) {
        console.error(err);
    }
}

async function updateHighscores(leaderboard){
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    date = dd + '/' + mm + '/' + yyyy;
    leaderboard.push({"nick": input_.value,"score": points, "date" : date});
    leaderboard = leaderboard.sort((a, b) => {
        if(a.score < b.score){
            return 1;
        }
        return -1;
    });
    leaderboard = leaderboard.slice(0, 7);
    let i = 1;
    ranking.innerHTML = "";
    for(let obj of leaderboard){
        let x = i + ". " + obj.nick + " | " + obj.score + " pkt | " + obj.date;
        let el = document.createElement("div");
        el.innerText = x;
        ranking.appendChild(el);
        i++;
    }
    await sendScore(API_URL, leaderboard);
}

async function sendScore(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'PUT', 
          mode: 'cors', 
          cache: 'no-cache', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        return response.json();
    }