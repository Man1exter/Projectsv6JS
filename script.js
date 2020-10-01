
const button1 = document.querySelector(".plus");
const button2 = document.querySelector(".minus");
const span1 = document.querySelector(".one");
const span2 = document.querySelector(".two");


const clicker = document.querySelector(".fa-arrow-alt-circle-down");
const ele = document.querySelector(".ele");



const bant = document.querySelector(".buttonX");
const bag = document.querySelector(".buttonY");
const ban = document.querySelector(".buttonZ");
const tepP = document.querySelector(".mon");

let $size = 50;
let $score;

const sums = (first, second) => {
     $score = first + second;
     span1.innerHTML = $score;
};

const multiply = () => {
     const sumsNew = $score / 2;
     span2.innerText = sumsNew;

};
const divide = () =>{
    const sumsNew = $score * 2;
    span2.innerText = sumsNew;
};
const positionY = () => {
     clicker.classList.toggle("roll");
     ele.classList.toggle("move");
};


const ones = () => {
     $size += 5;
     tepP.style.fontSize = $size + 'px';
};
const oneY = () => {
     $size -= 5;
     tepP.style.fontSize = $size - 'px';
};
const oneX = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    tepP.style.color = `rgb(${r},${g},${b})`;
};


bant.addEventListener("click", ones);
bag.addEventListener("click", oneY);
ban.addEventListener("click", oneX);

button2.addEventListener("click", multiply);
button1.addEventListener("click", divide);
clicker.addEventListener("click", positionY);


sums(10,10);



