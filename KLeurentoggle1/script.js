const body = document.querySelector('body');
const menuButton = document.getElementById('menu');
const menu = document.querySelector("#lijst");

menuButton.addEventListener("click", function () {
     menu.classList.toggle('visible');
})

menuButton.addEventListener("mouseover", function () {
    menu.classList.toggle('visible');
})



const changeColor = event => {
    const color = event.target.innerHTML.split(' ')[0];
    body.style.background = color;
    menu.classList.toggle('visible');
    document.querySelector(".text").style.color= "white";
}

const blue = document.querySelector(".blue").
addEventListener("click", changeColor)

const red = document.querySelector(".red").
addEventListener("click", changeColor)

const orange = document.querySelector(".yellow").
addEventListener("click", changeColor)

const green = document.querySelector(".green").
addEventListener("click", changeColor)


