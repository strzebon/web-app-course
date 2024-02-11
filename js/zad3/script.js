let add = document.querySelector("#add");
let delet = document.querySelector("#delete");
let list = document.querySelector("#list");
let counter = 0;

add.addEventListener("click", added);
delet.addEventListener("click", deleted);

function added(){
    let el = document.createElement("li");
    el.innerText = "item " + counter;
    list.appendChild(el);
    counter += 1;
}

function deleted(){
    list.removeChild(list.firstElementChild);
    counter -= 1
}