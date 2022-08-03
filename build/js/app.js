
// Menu
const menu = document.querySelector('.nav');
const btnBurger = document.querySelector('.burger-btn');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const logoB = document.querySelector('.logo-m');

// Tabs
const botones = document.querySelectorAll('.boton');
const tabs = document.querySelectorAll('.tab');


// Form
const form = document.querySelector('.form');
const email = document.querySelector('.email');
const bloque = document.querySelector('.contenido');
const span = document.querySelector('span');
const error = document.querySelector('.error');
const expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', validarFormulario);
});

btnBurger.addEventListener('click', () => {
    const visibilidad = menu.getAttribute('data-visible');

    console.log(visibilidad);

    if(visibilidad === 'false') {
        menu.setAttribute('data-visible', true);
        btnBurger.setAttribute('aria-expanded', true);
        body.setAttribute('data-scroll', false);
        header.setAttribute('data-bg', true);
        logo.classList.add('none');
        logoB.classList.add('block');
    } else {
        menu.setAttribute('data-visible', false);
        btnBurger.setAttribute('aria-expanded', false);
        body.setAttribute('data-scroll', true);
        header.setAttribute('data-bg', false);
        logo.classList.remove('none');
        logoB.classList.remove('block');
    }
});

botones.forEach( (boton, i) => {
    botones[i].addEventListener('click', () => {

        botones.forEach( (boton, i) => {
            botones[i].classList.remove('activo');
            tabs[i].classList.remove('activo');
        })

        botones[i].classList.add('activo');
        tabs[i].classList.add('activo');


        
    })
})


function validarFormulario(e) {

    if(expresion.test(email.value)) {
        form.reset();
        bloque.classList.remove('activo');
        span.classList.remove('activo');
        error.classList.remove('activo');

    } else {
        e.preventDefault();
        bloque.classList.add('activo');
        span.classList.add('activo');
        error.classList.add('activo');
    }
}