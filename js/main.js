/*menu*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () =>  {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () =>  {
        navMenu.classList.remove('show-menu')
    })
}

/* remove menu mobile*/
const navLink = document.querySelectorAll('.navLink'); 

function linkAction(event) {
  const clickedLink = event.currentTarget;
  const isSubMenuLink = clickedLink.closest('.sub-menu');

  // Verifica si el elemento clicado es un enlace principal (no del submenú)
  if (!isSubMenuLink) {
    // Si es un enlace principal, toggle la clase show-menu
    navMenu.classList.toggle('show-menu');
  }
}

//navLink.forEach(n => n.addEventListener('click', linkAction)); Lo comenté para que cada vez que apreta un item en mobile no se salga el menu



/*swiper nuevos slider */

let newSwiper = new Swiper (".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
})



/*Background header*/

/*
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 4500) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

*/





/*scroll section*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current =>  {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.remove('active-link')
        }
    } )
}
window.addEventListener('scroll', scrollActive)


/*scroll up*/


function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 460 ) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*Animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300
})

sr.reveal(`.home-swiper, .new-swiper, .newslc`)
sr.reveal(`.categorydata, .footercontent, .contacto, .efect-quienes-somos, .center-carrousel, .radiestesia-container, .efect-calistenia, .efect-mundocrypto, .efect-ayuno`, {interval: 100})
sr.reveal(`.aboutdata, .discountimg`, {origin: 'left'})
sr.reveal(`.aboutimg, .discountdata`, {origin: 'left'})


const grande = document.querySelector(".grande");
const btnIzquierda = document.querySelector(".btn-izquierda");
const btnDerecha = document.querySelector(".btn-derecha");
let deslizamientos = 0;








