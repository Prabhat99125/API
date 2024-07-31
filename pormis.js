const key = "942a25d4ae316af1c95199044732c3fd"
let city = 'godhra';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
let fects = document.querySelector("#fects");
let getdata =  document.querySelector("#getdata");


const getfact = async () => {
    console.log("geting data...")
    let promis = await fetch(URL);
    console.log(promis);
    let data = await promis.json();
    console.log(data.name);
    
}

getdata.addEventListener("click", getfact);