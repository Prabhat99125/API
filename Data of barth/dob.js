let fromValue = document.querySelector("#fromValue");
let toValue = document.querySelector("#toValue");
let btn = document.querySelector("#btn");

const getValu = () => {
    let from1 = fromValue.value;
    let to1= toValue.value;
    console.log(from1);
    console.log(to1);
}


btn.addEventListener(("click"), getValu);