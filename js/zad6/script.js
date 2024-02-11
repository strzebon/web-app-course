let dodaj = document.querySelector("#dodaj");
let nazwa = document.querySelector("#name");
let numer = document.querySelector("#number");
let book = document.querySelector("#book");

let clicked = (el) => {
    el.parentNode.remove();
}

dodaj.addEventListener("click", () => {
    if(nazwa.checkValidity() && numer.checkValidity()){
        book.innerHTML += `<div class="section">
        <div>
            <p class="pname">${nazwa.value}</p>
            <p>${numer.value}</p>
        </div>
        <i onclick = "clicked(this)" class="material-icons">delete</i>
    </div>`
    }
})