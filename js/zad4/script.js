let test = document.querySelector("#test");
let dodaj = document.querySelector("#dodaj");
let usun = document.querySelector("#usun");
let el = document.querySelector("#el");
let licznik = 0;

dodaj.addEventListener("click", dodac);
usun.addEventListener("click", usunac);


function dodac(){
    test.addEventListener("click", clicked);
}

function usunac(){
    test.removeEventListener("click", clicked);
    licznik = 0;
    el.innerHTML = licznik;
}

function clicked(){
    licznik +=1;
    el.innerHTML = licznik;
}