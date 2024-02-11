// Element.setAttribute("src", first)
let el = document.querySelector("#img0");
let przycisk = document.querySelector("#przycisk")
let x = 0;
let imgs = ["krk1.jpg", "krk2.jpg", "krk3.jpg"];
przycisk.addEventListener("click", () => {
    x = (x + 1) % 3;
    el.setAttribute("src", imgs[x]);
    el.id = "img" + x;
})