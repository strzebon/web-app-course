let eye1 = document.querySelector("#eye1");
let eye2 = document.querySelector("#eye2");
let clicked = (e) => {
    if(e.target.innerText == "visibility"){
        e.target.innerText = "visibility_off";
        e.target.parentNode.children[0].type = "password";
    }
    else{
        e.target.innerText = "visibility";
        e.target.parentNode.children[0].type = "text";
    }
}

eye1.addEventListener("click", clicked);
eye2.addEventListener("click", clicked);

let pwd = document.querySelector("#pwd");
let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");
let r3 = document.querySelector("#r3");
let r4 = document.querySelector("#r4");
let specials=/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;


pwd.addEventListener("keyup", () => {
    let s = pwd.value;
    let flagSpecial = false;
    let flagCapital = false;
    let flagDigit = false;
    if(s.length >= 8){
        r1.children[0].style.display = "none";
        r1.children[1].style.display = "inline-block";
    }
    else{
        r1.children[0].style.display = "inline-block";
        r1.children[1].style.display = "none";
    }

    for (x of s) {
        if(x.match(specials)){
            flagSpecial = true;
        }
        if(x.match("[A-Z]")){
            flagCapital = true;
        }
        if(x.match("[0-9]")){
            flagDigit = true;
        }
    }
    if(flagSpecial){
        r2.children[0].style.display = "none";
        r2.children[1].style.display = "inline-block";
    }
    else{
        r2.children[0].style.display = "inline-block";
        r2.children[1].style.display = "none";
    }

    if(flagCapital){
        r3.children[0].style.display = "none";
        r3.children[1].style.display = "inline-block";
    }
    else{
        r3.children[0].style.display = "inline-block";
        r3.children[1].style.display = "none";
    }

    if(flagDigit){
        r4.children[0].style.display = "none";
        r4.children[1].style.display = "inline-block";
    }
    else{
        r4.children[0].style.display = "inline-block";
        r4.children[1].style.display = "none";
    }
})

let repeat = document.querySelector("#repeat");
let err = document.querySelector("#err");
document.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        if(pwd.value == repeat.value){
            err.style.display = "none";
        }
        else{
            err.style.display = "block";
        }
    }
})
