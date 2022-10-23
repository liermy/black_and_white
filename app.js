var trocar = document.getElementById('troca');
var btn = document.getElementById('btn')
var element = document.body;
var titulo = document.getElementById('title')

btn.onclick = function() {
    if(btn.value === 'white'){
        trocar.src = './_img/sol.png';
        btn.value = 'black';
        btn.innerHTML = 'WhiteMode'
        element.classList.toggle("dark-mode");
        titulo.innerHTML = 'WhiteMode using JavaScript'
}else {
    trocar.src = './_img/lua.png';
    btn.value = 'white';
    btn.innerHTML = 'BlackMode';
    element.classList.toggle("dark-mode")
    titulo.innerHTML = 'BlackMode using JavaScript'
}}
