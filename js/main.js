$(function(){
    //Слайдер
    $('.customer__slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        dots:true,
        autoplay:5000
    });
    //Менюшка входа/выхода
    $('.header__signUp').on('click',function(){
      $('.sign__up-block').toggleClass('sign__up-block-active');
      $('.sign__up-form').toggleClass('sign__up-form-active');
      $('.partners').toggleClass('dn')
      $('.main').toggleClass('dn')
      $('.works').toggleClass('dn')
      $('.services').toggleClass('dn')
      $('.request').toggleClass('dn')
      $('.customer').toggleClass('dn')
      $('.footer').toggleClass('dn')
      $('.nav-active').toggleClass('dn')
    })
    $('.header__signIn').on('click',function(){
      $('.sign__in-block').toggleClass('sign__in-block-active');
      $('.sign__in-form').toggleClass('sign__in-form-active');
      $('.partners').toggleClass('dn')
      $('.main').toggleClass('dn')
      $('.works').toggleClass('dn')
      $('.services').toggleClass('dn')
      $('.request').toggleClass('dn')
      $('.customer').toggleClass('dn')
      $('.footer').toggleClass('dn')
      $('.nav-active').toggleClass('dn')
    })
    $('.sign__in-block').on('click',function(){
      $('.sign__in-block').removeClass('sign__in-block-active')
      $('.sign__in-form').removeClass('sign__in-form-active')
      $('.partners').removeClass('dn')
      $('.main').removeClass('dn')
      $('.works').removeClass('dn')
      $('.services').removeClass('dn')
      $('.request').removeClass('dn')
      $('.customer').removeClass('dn')
      $('.footer').removeClass('dn')
      $('.nav-active').removeClass('dn')
    })
    $('.sign__up-block').on('click',function(){
      $('.sign__up-block').removeClass('sign__up-block-active')
      $('.sign__up-form').removeClass('sign__up-form-active')
      $('.partners').removeClass('dn')
      $('.main').removeClass('dn')
      $('.works').removeClass('dn')
      $('.services').removeClass('dn')
      $('.request').removeClass('dn')
      $('.customer').removeClass('dn')
      $('.footer').removeClass('dn')
      $('.nav-active').removeClass('dn')
    })
    //Бургер меню
    $('.burger').on('click',function(){
      $('.burger').toggleClass('burger-active');
      $('.nav').toggleClass('nav-active');
      $('.header__items').toggleClass('header__items-active');
      $('.header__link').toggleClass('header__link-active');
      $('.header__items-inside').toggleClass('header__items-inside-active');
      $('.header__arrow').toggleClass('dn');
      $('.header__item').toggleClass('header__item-active');
      $('.header__buttons').toggleClass('header__buttons-active');
      $('.header__signUp-link').toggleClass('header__signUp-link-active');
      $('.header__signIn-link').toggleClass('header__signIn-link-active');  
  })
})
//Анимация появления блоков при скролле JS
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  let options = {
    threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
// //Логика проверки паролей
//   let btn = document.querySelector('.sign__up-link')
//   btn.addEventListener('click', function() {
//     let passwordFirst = document.querySelector('.sign__up-password-1')
//     let passwordSecond = document.querySelector('.sign__up-password-2')
//         if(passwordFirst.value == passwordSecond.value){
//           passwordFirst.setAttribute('style', 'border: 1px solid green;')
//           passwordSecond.setAttribute('style', 'border: 1px solid green;')
//           alert('passwords correct')
//         }
//         else{
//           passwordFirst.setAttribute('style', 'border: 1px solid red;')
//           passwordSecond.setAttribute('style', 'border: 1px solid red;')
//           alert('passwords incorrect')
//         }
//       })
//Отключение анимаций при маленьком экране
if(window.screen.width<769){
  for(let i = 0;i<document.querySelectorAll('.works__inner').length;i++){
    document.querySelectorAll('.works__inner')[i].classList.remove('element-animation')
  }
}

