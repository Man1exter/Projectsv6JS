
const button1 = document.querySelector(".plus");
const button2 = document.querySelector(".minus");
const span1 = document.querySelector(".one");
const span2 = document.querySelector(".two");


const clicker = document.querySelector(".fa-arrow-alt-circle-down");
const ele = document.querySelector(".ele");



const bant1 = document.querySelector(".buttonX");
const bant2 = document.querySelector(".buttonY");
const bant3 = document.querySelector(".buttonZ");
const tep = document.querySelector(".mon");

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
     tep.style.fontSize = $size + 'px';
};
const oneY = () => {
     $size -= 5;
     tep.style.fontSize = $size - 'px';
};
const oneX = () => {
    
};












button2.addEventListener("click", multiply);
button1.addEventListener("click", divide);
clicker.addEventListener("click", positionY);


bant1.addEventListener("click", ones);
bant2.addEventListener("click", oneY);
bant3.addEventListener("click", oneX);

sums(10,10);



