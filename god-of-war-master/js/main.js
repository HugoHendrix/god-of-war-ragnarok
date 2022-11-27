var swiper = new Swiper(".slide-characters", {
  slidesPerView: 3.5,
  spaceBetween: 19,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 2.2,
    },
    991: {
      slidesPerView: 2.8,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
});

AOS.init({
  duration: 1000,
  once: true,
});

const btnTop = document.querySelector('#backToTop')

// quando rolar a página 100px do topo para baixo, o botão aparece

window.onscroll = function () {
  scrollFunction()
}
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.display = 'block'
  } else {
    btnTop.style.display = 'none'
  }
}

// quando clicar no botão, a pagina voltará para o inicio

btnTop.addEventListener('click', function () {
  window.scrollTo(0, 0)
})