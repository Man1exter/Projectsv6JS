
const button1 = document.querySelector(".plus");
const button2 = document.querySelector(".minus");
const span1 = document.querySelector(".one");
const span2 = document.querySelector(".two");


const clicker = document.querySelector(".fa-arrow-alt-circle-down");
const ele = document.querySelector(".ele");



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
}

button2.addEventListener("click", multiply);
button1.addEventListener("click", divide);
clicker.addEventListener("click", positionY);

sums(10,10);



