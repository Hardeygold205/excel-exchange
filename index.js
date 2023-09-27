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
const Nav = document.querySelector(".navbar")


$('.navbar-nav a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});


$(document).on('click', function (e) {
  if ($(e.target).closest('.navbar').length === 0) {
      $('.navbar-collapse').collapse('hide');
  }
});




/*
document.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.closest(".navbar") && !target.closest(".navbar-collapse")) {
    NavDiv.classList.collapse('hide');
  }

});

document.addEventListener("click", (event) => {
  const target = event.target;

  
  if (!target.closest(".navbar-toggler") && !target.closest(".navbarNav")) {
    OpenMenu.classList.remove("showmenu");
  }
});

MenuItems.forEach((MenuItem) => {
  MenuItem.addEventListener('click', () => {
    OpenMenu.classList.toggle("showmenu");
  });
});

*/