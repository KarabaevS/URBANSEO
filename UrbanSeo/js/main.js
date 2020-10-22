var swiper = new Swiper('.prices .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.prices .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      768:{
        slidesPerView: 2,
      },
      320:{
        slidesPerView: 1,
      }
    }

  });

  
  const btn =  document.querySelector('.menu-btn');
  const wrap = document.querySelector('.humburger-menu');

  btn.addEventListener('click', ()=>{
    wrap.classList.toggle('close');
  });
