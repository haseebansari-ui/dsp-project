"use strict";

// ====================
// 	Desktop Menue Bar
// ====================

var menueBar = document.querySelector(".menue-bar");
var sideMenu = document.querySelector('.side-manue');
var sideMenuClose = document.querySelector('.side-menu-close')

menueBar.addEventListener("click", ()=>{
	sideMenu.classList.add("active");
})

sideMenuClose.addEventListener("click", ()=>{
	sideMenu.classList.remove("active");
})


// ===============
// 	Sliders
// ===============

$(".services-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 1500,
  arrows: false,
  autoplay: true,
  dots: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".testimonial-slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  speed: 1500,
  autoplay: true,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});
$(".posts-slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});


// ===============
// 	Scroll Header
// ===============

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("h-scroll");
  } else {
    header.classList.remove("h-scroll");
  }
});



// ===============
// 	Accordian
// ===============

const accordian = document.querySelectorAll('.contentBx');

for (let i = 0; i < accordian.length; i++) {
	accordian[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}


// script should be placed at the end of the all scripts
// AOS
AOS.init();
$(window).on("load", function () {
  AOS.refresh();
});

// ===============
// 	Login Form
// ===============

var passwordShow = document.querySelector(".hide-password");
var passwordInput = document.querySelector(".input-field-psw");
var passwordHideEye = document.querySelector(".hide-eye");
var passwordShowEye = document.querySelector(".show-eye");

passwordShow.addEventListener("click",()=>{
  if(passwordInput.type === "password"){
      passwordInput.type = "text";
       passwordShowEye.style.display = "block";
       passwordHideEye.style.display = "none";
    }
    else{
      passwordInput.type = "password";
      passwordHideEye.style.display = "block";
      passwordShowEye.style.display = "none";
            
    }    
})