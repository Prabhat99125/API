const URL = "https://cat-fact.herokuapp.com/facts";
let fects = document.querySelector("#fects");
let getdata =  document.querySelector("#getdata");


const getfact = async () => {
    console.log("geting data...")
    let promis = await fetch(URL);
    console.log(promis);
    let data = await promis.json();
    fects.innerText = data[3].text;
}

getdata.addEventListener("click", getfact);