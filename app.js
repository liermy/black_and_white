var trocar = document.getElementById('troca');
var btn = document.getElementById('btn')
var element = document.body;
var titulo = document.getElementById('title')

alert('press the button to change the background color')

btn.onclick = function() {
    if(btn.value === 'white'){
        trocar.src = './img/sol.png';
        btn.value = 'black';
        btn.innerHTML = 'WhiteMode'
        element.classList.toggle("dark-mode");
        titulo.innerHTML = 'WhiteMode using JavaScript'
}else {
    trocar.src = './img/lua.png';
    btn.value = 'white';
    btn.innerHTML = 'BlackMode';
    element.classList.toggle("dark-mode")
    titulo.innerHTML = 'BlackMode using JavaScript'
}}
