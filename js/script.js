const d = document;
const w = window;

const $btnHamburger = d.querySelector('.btn-hamburger');
const $navMobile = d.querySelector('.header-nav__ul-mobile');
const $navDesktop = d.querySelector('.header-nav__ul-desktop');

const $modalPortfolio = d.querySelector('.modal');

d.addEventListener('DOMContentLoaded', (e) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        /* La pantalla tiene al menos 1024 píxeles de ancho */
        $navDesktop.classList.remove('none');
        $btnHamburger.classList.add('none');
    } else {
        /* La pantalla tiene menos de 1024 píxeles de ancho */
        $navDesktop.classList.add('none');
        $btnHamburger.classList.remove('none');
    }
});

w.addEventListener('resize', (e) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        /* La pantalla tiene al menos 1024 píxeles de ancho */
        $navDesktop.classList.remove('none');
        $btnHamburger.classList.add('none');
        $navMobile.classList.add('none');
        if ($btnHamburger.classList.contains('is-active')) {
            $btnHamburger.classList.remove('is-active')
        }
    } else {
        /* La pantalla tiene menos de 1024 píxeles de ancho */
        $navMobile.classList.remove('none');
        $navMobile.classList.remove('is-active');
        $navDesktop.classList.add('none');
        $btnHamburger.classList.remove('none');
    }
});

d.addEventListener('click', (e) => {

    if (e.target.matches('.main-containerTarjetas__enlace') || e.target.matches('.main-containerTarjetas__enlace *')) {
        // $modalPortfolio.classList.remove('hidden');
        $modalPortfolio.style.opacity = 1;
        $modalPortfolio.style.pointerEvents = 'all';
    }
    
    if (e.target.matches('.modal a[href="#close"]') || e.target.matches('.modal a[href="#close"] *')) {
        console.log('se hizo click en la cruz');
        // $modalPortfolio.classList.add('hidden');
        $modalPortfolio.style.opacity = 0;
        $modalPortfolio.style.pointerEvents = 'none';
    }
    
    if ((e.target.matches('.btn-hamburger')) || (e.target.matches('.btn-hamburger *'))) {
        $btnHamburger.classList.toggle('is-active');
        
        if (!$btnHamburger.classList.contains('is-active')) {
            $navMobile.classList.remove('is-active');
        } else {
            $navMobile.classList.add('is-active');
        }
        
    }
    
    if(e.target.matches(".header-nav__ul-mobile li a")) {
        $navMobile.classList.remove("is-active");
        $btnHamburger.classList.toggle('is-active');
    } else {
        return false;
    }
    
    

});