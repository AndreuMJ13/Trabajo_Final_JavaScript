const menu = document.querySelector('.menu');
const navegacion = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(navegacion)

menu.addEventListener('click', ()=> {
    navegacion.classList.toggle("spread")
})


window.addEventListener('click', e=>{
if(navegacion.classList.contains('spread') && e.target != navegacion && e.target != menu        ){
navegacion.classList.toggle("spread")
}
})