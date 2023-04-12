// Задание: Создать страницу и кнопку, при нажатии которой будет меняться тема странички.
var nod = document.getElementById("main")
let theme_button = document.querySelector(".Theme_button")
theme_button.onclick = function (){
    nod.classList.toggle("light")
    nod.classList.toggle("dark")
}