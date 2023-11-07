var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");

var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "header": {}
};

$.ajax(settings).done(function (response){
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
});

const HMenu = document.getElementById("navbarNav"); 
const NavDiv = document.querySelector(".navbar-collapse");
const MenuItems = document.querySelectorAll(".navbar-nav a");
const Nav = document.querySelector(".navbar");


$('.navbar-nav a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});


$(document).on('click', function (e) {
  if ($(e.target).closest('.navbar').length === 0) {
      $('.navbar-collapse').collapse('hide');
  }
});

const elementsToAnimate = document.querySelector('h1');
let isVisibleArray = Array.from({ length: elementsToAnimate.length }, () => false);

const h1Elements = document.querySelectorAll('h1');
const CardBody = document.querySelectorAll('.card-body');
const AllRow = document.querySelectorAll('.rows');

h1Elements.forEach((element) => {
    element.classList.add('hidden');
});

CardBody.forEach((element) => {
  element.classList.add('card-body');
});


AllRow.forEach((element) => {
  element.classList.add('rows');
});


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  h1Elements.forEach((element) => {
      const elementOffset = element.getBoundingClientRect();

      if (elementOffset.top >= 0 && elementOffset.bottom <= window.innerHeight) {
          element.classList.add('visible');
      } else {
          element.classList.remove('visible');
      }
  });

  CardBody.forEach((element) => {
    const elementOffset = element.getBoundingClientRect();

    if (elementOffset.top >= 0 && elementOffset.bottom <= window.innerHeight) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
  });

  AllColl.forEach((element) => {
    const elementOffset = element.getBoundingClientRect();

    if (elementOffset.top >= 0 && elementOffset.bottom <= window.innerHeight) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
  });

  AllRow.forEach((element) => {
    const elementOffset = element.getBoundingClientRect();

    if (elementOffset.top >= 0 && elementOffset.bottom <= window.innerHeight) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
  });

});

const NavToggler = document.getElementById("nav-toggler");
const NavIcon = document.getElementById("nav-icon");
let isBar = true;

NavToggler.addEventListener('click', () => {
  if (isBar) {
    NavIcon.classList.remove("navbar-toggler-icon");
    NavIcon.classList.add("fas", "fa-times");
    NavIcon.style.fontSize = "24px";
    //NavIcon.style.transform = "rotate(30deg)";
    isBar = false;
  } else {
    NavIcon.classList.remove("fas", "fa-times");
    NavIcon.classList.add("navbar-toggler-icon");
    //NavIcon.style.transform = "none";
    NavIcon.style.fontSize = "1.25rem";
    isBar = true;
  }
});




const buttons = document.querySelectorAll(".btn-swap");

buttons.forEach(button => {
    const icon = button.querySelector("i");
    let isPlus = true;

    button.addEventListener("click", () => {
        if (isPlus) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-times");
            isPlus = false;
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-plus");
            isPlus = true;
        }
    });
});


const Arrows = document.querySelectorAll(".up-swap");

Arrows.forEach(Arrow => {
    const icon = Arrow.querySelector("i");
    let isUp = true;

    Arrow.addEventListener("click", () => {
        if (isUp) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
            isUp = false;
        } else {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
            isUp = true;
        }
    });
});
