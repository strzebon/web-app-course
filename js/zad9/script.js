let card = document.querySelector("#card");
let right = document.querySelector("#right");
let left = document.querySelector("#left");
let random = document.querySelector("#random");
let imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
let names = ["Janina Kowalska", "Andrzej Wach", "Anna Wnęk", "Julia Stanowska"];
let positions = ["Product Manager", "Marketing Manager", "Project Manager", "Finance Manager"];
let i = 0;

right.addEventListener("click", () => {
    i = (i + 1) % 4;
    card.style.animationName = "toLeft";
    card.style.animationDuration = "0.5s";
    setTimeout(() => {
        card.children[0].setAttribute("src", imgs[i]);
        card.children[1].innerText = names[i];
        card.children[2].innerText = positions[i];
        card.style.animationName = "fromRight";
        card.style.animationDuration = "0.5s";
    }, 480);
});

left.addEventListener("click", () => {
    i = (i + 3) % 4;
    card.style.animationName = "toRight";
    card.style.animationDuration = "0.5s";
    setTimeout(() => {
        card.children[0].setAttribute("src", imgs[i]);
        card.children[1].innerText = names[i];
        card.children[2].innerText = positions[i];
        card.style.animationName = "fromLeft";
        card.style.animationDuration = "0.5s";
    }, 480);
});

random.addEventListener("click", () => {
    i = Math.floor(Math.random()*4);
    card.style.animationName = "toDown";
    card.style.animationDuration = "0.5s";
    setTimeout(() => {
        card.children[0].setAttribute("src", imgs[i]);
        card.children[1].innerText = names[i];
        card.children[2].innerText = positions[i];
        card.style.animationName = "fromTop";
        card.style.animationDuration = "0.5s";
    }, 480);
});
