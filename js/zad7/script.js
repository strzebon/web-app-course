const API_URL = "cities.json";
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

let a = (cities) => {
    let citiesInMalopolskie = cities.filter(city => city.province == "małopolskie");
    let a = document.querySelector("#a");
    citiesInMalopolskie.forEach(city => a.innerHTML += `<p>${city.name}<p>`);

}

let b = (cities) => {
    let double_a = cities.filter(city => /a/.test(city.name) && city.name.match(/a/g).length == 2);
    let b = document.querySelector("#b");
    double_a.forEach(city => b.innerHTML += `<p>${city.name}<p>`);
}

let c = (cities) => {
    new_cities = [...cities];
    new_cities.sort((a, b) => b.dentensity-a.dentensity)
    let c = document.querySelector("#c");
    c.innerHTML += `<p>${new_cities[4].name}<p>`;
}

let d = (cities) => {
    bigCities = cities.filter(city => city.people > 100000);
    bigCities.forEach(city => city.name += " city");
    let d = document.querySelector("#d");
    bigCities.forEach(city => d.innerHTML += `<p>${city.name}<p>`);
}

let e = (cities) => {
    let above = cities.filter(city => city.people > 80000);
    let under = cities.filter(city => city.people < 80000);
    let e = document.querySelector("#e");
    e.innerHTML += `<p>miast poniżej 80000 mieszkańców (${under.length}) jest więcej niż miast powyżej 80000 mieszkańców (${above.length})`
}

let f = (cities) => {
    let p_cities = cities.filter(city => city.name.startsWith("P"));
    let avg = p_cities.reduce((total, a) => total + a.area, 0) / p_cities.length;
    let f = document.querySelector("#f");
    f.innerHTML += `<p>${Math.round(avg*100)/100}<p>`;
}

let g = (cities) => {
    let citiesInPomorskie = cities.filter(city => city.province == "pomorskie");
    let citiesInPomorskieUnder5000 = citiesInPomorskie.filter(city => city.people > 5000);
    console.log(citiesInPomorskie.length == citiesInPomorskieUnder5000, citiesInPomorskieUnder5000.length);
    let g = document.querySelector("#g");
    if(citiesInPomorskie.length == citiesInPomorskieUnder5000){
        g.innerHTML += `<p>tak, jest ich ${citiesInPomorskieUnder5000.length}<p>`;
    }
    else{
        g.innerHTML += `<p>nie, jest ich ${citiesInPomorskieUnder5000.length}<p>`;
    }
}


getApi().then(data => {
    let cities = data.cities;
    a(cities);
    b(cities);
    c(cities);
    d(cities);
    e(cities);
    f(cities);
    g(cities);
});