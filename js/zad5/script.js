let counter_place = document.querySelector("#counter_place");
let obj1 = document.querySelector("#obj1");
let obj2 = document.querySelector("#obj2");
let obj3 = document.querySelector("#obj3");
let info = document.querySelector("#info")
let counter = 0;
let flag_propagation = true;
let flag_order = false;

let check = () => {
    if(counter > 50){
        obj3.style.backgroundColor = "lightgrey"; 
        obj3.removeEventListener("click", f_obj3, flag_order);
    }
    else if(counter > 30){
        obj2.style.backgroundColor = "lightgrey"; 
        obj2.removeEventListener("click", f_obj2, flag_order);
    }
}

let f_obj1 = (event) => {
    counter += 1
    counter_place.innerText = counter;
    if(!flag_propagation){
        event.stopPropagation();
    }
    info.innerHTML += "<h5>nacisnąłeś niebieski o wartości 1</h5>";
    check();
}

let f_obj2 = (event) => {
    counter += 2
    counter_place.innerText = counter;
    if(!flag_propagation){
        event.stopPropagation();
    }
    info.innerHTML += "<h5>nacisnąłeś czerwony o wartości 2</h5>";
    check();
}

let f_obj3 = (event) => {
    counter += 5
    counter_place.innerText = counter;
    if(!flag_propagation){
        event.stopPropagation();
    }
    info.innerHTML += "<h5>nacisnąłeś żółty o wartości 5</h5>";
    check();
}

obj1.addEventListener("click", f_obj1);
obj2.addEventListener("click", f_obj2);
obj3.addEventListener("click", f_obj3);

let propagation = document.querySelector("#propagation");
let reset = document.querySelector("#reset");
let order = document.querySelector("#order");

propagation.addEventListener("click", () => {
    if(flag_propagation){
        propagation.innerText = "Start propagation";
        flag_propagation = false;
    }
    else{
        propagation.innerText = "Stop propagation";
        flag_propagation = true;
    }
});

reset.addEventListener("click", () => {
    counter = 0;
    counter_place.innerText = 0;
    obj3.style.backgroundColor = "yellow"; 
    obj3.addEventListener("click", f_obj3);
    obj2.style.backgroundColor = "red"; 
    obj2.removeEventListener("click", f_obj2);
    flag_propagation = true;
    propagation.innerText = "Stop propagation";
    obj1.removeEventListener("click", f_obj1, flag_order);
    obj2.removeEventListener("click", f_obj2, flag_order);
    obj3.removeEventListener("click", f_obj3, flag_order);
    flag_order = false
    obj1.addEventListener("click", f_obj1);
    obj2.addEventListener("click", f_obj2);
    obj3.addEventListener("click", f_obj3);
    info.innerHTML = "";
});

order.addEventListener("click", () => {
    obj1.removeEventListener("click", f_obj1, flag_order);
    obj2.removeEventListener("click", f_obj2, flag_order);
    obj3.removeEventListener("click", f_obj3, flag_order);
    flag_order = !flag_order;
    obj1.addEventListener("click", f_obj1, flag_order);
    obj2.addEventListener("click", f_obj2, flag_order);
    obj3.addEventListener("click", f_obj3, flag_order);
    check();
})