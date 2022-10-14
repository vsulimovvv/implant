window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Nice Select
  $('select').niceSelect();

  // * ===== toggleAccordion
  function toggleAccordion(accordionControl, accordionContent, accordion) {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  }

  toggleAccordion('.accordion-control', '.accordion-content', '.accordion');

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 25,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      thumbs: {
        swiper: mySwiperNav,
      },
      navigation: {
        nextEl: document.querySelector('#slider-main .swiper-button-next'),
        prevEl: document.querySelector('#slider-main .swiper-button-prev'),
      },
    });
  })();

  // * =====  activeLink
  (function activeLink() {
    const sections = document.querySelectorAll('section[id]');
    console.log(sections);

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 170;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.section-top__item a[href*=' + sectionId + ']')
            .classList.add('active');
        } else {
          document
            .querySelector('.section-top__item a[href*=' + sectionId + ']')
            .classList.remove('active');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 90) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 90) {
        header.classList.add('scroll-header');
      }
    }

    changeBg();
  })();

  // * ===== Fixed Header
  (function fixedList() {
    function scrollList() {
      const nav = document.querySelector('.section-top__menu');
      if (nav) {
        if (this.scrollY >= 300) {
          nav.classList.add('scroll');
        } else {
          nav.classList.remove('scroll');
        }
      }
    }

    window.addEventListener('scroll', scrollList);

    // ! Change
    function changeBg() {
      const header = document.querySelector('.section-top__menu');
      if (header) {
        if (window.pageYOffset >= 300) {
          header.classList.add('scroll');
        }
      }
    }

    changeBg();
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelectorAll('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');

    menuBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-buy', '.popup--buy', '.popup__close');
  })();
});
