let przycisk = document.querySelector("#przycisk");
przycisk.addEventListener("click", clicked);
let powitanie = document.querySelector("#powitanie")

function clicked(){
    let name = prompt("Podaj swoje imię");
    console.log(name);
    l = name.length;
    if (name[l-1] =='a'){
        powitanie.innerText = "Witam panią: " + name;
    }

    else{
        powitanie.innerText = "Witam pana: " + name;
    }
}