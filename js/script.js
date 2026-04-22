"use strict";

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

// ====================
// 	Desktop Menue Bar
// ====================

const menueBar = document.querySelector(".menue-bar");
const sideMenu = document.querySelector('.side-manue');
const sideMenuClose = document.querySelector('.side-menu-close');

if (menueBar && sideMenu) {
  menueBar.addEventListener("click", () => {
    sideMenu.classList.add("active");
  });
}

if (sideMenuClose && sideMenu) {
  sideMenuClose.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
}

// ===============
// 	Login Form
// ===============

const passwordShow = document.querySelector(".hide-password");
const passwordInput = document.querySelector(".input-field-psw");
const passwordHideEye = document.querySelector(".hide-eye");
const passwordShowEye = document.querySelector(".show-eye");

if (passwordShow && passwordInput) {
  passwordShow.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      if (passwordShowEye) passwordShowEye.style.display = "block";
      if (passwordHideEye) passwordHideEye.style.display = "none";
    } else {
      passwordInput.type = "password";
      if (passwordHideEye) passwordHideEye.style.display = "block";
      if (passwordShowEye) passwordShowEye.style.display = "none";
    }
  });
}

// =====================
// 	Menu Bar Sub Menue
// =====================

const mobileMenue = document.querySelectorAll('.mobile-menue-list-bx');
const moblieSubMenue = document.querySelector(".mobile-menue-list");
const plusIcon = document.querySelector(".plus-srvc");
const minusIcon = document.querySelector(".minus-srvc")

mobileMenue.forEach(item => {
  item.addEventListener("click", () => {
    if (moblieSubMenue.style.display === "none") {
      moblieSubMenue.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      moblieSubMenue.style.display = "none";
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  });
});

// ==================================
// 	Menu Bar Sub Menue bar resources
// ==================================

const resoucesMenue = document.querySelectorAll('.resources-sub-menue-list');
const resourcesMoblieSubMenue = document.querySelector(".resources-sub-menue-points");
const resourcesPlusIcon = document.querySelector(".resources-plus-srvc");
const resourcesMinusIcon = document.querySelector(".resources-minus-srvc")

resoucesMenue.forEach(item => {
  item.addEventListener("click", () => {
    if (resourcesMoblieSubMenue.style.display === "none") {
      resourcesMoblieSubMenue.style.display = "block";
      resourcesPlusIcon.style.display = "none";
      resourcesMinusIcon.style.display = "block";
    } else {
      resourcesMoblieSubMenue.style.display = "none";
      resourcesPlusIcon.style.display = "block";
      resourcesMinusIcon.style.display = "none";
    }
  });
});