var btc = document.getElementById("bitcoin");
//var btc3 = document.getElementById("bitcoin3");
var eth = document.getElementById("ethereum");
var btc2 = document.getElementById("bitcoin2");
var eth2 = document.getElementById("ethereum2");
var doge = document.getElementById("dogecoin");
var sol = document.getElementById("solana");
var xrp = document.getElementById("stellar");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin,solana,tron,stellar&vs_currencies=usd",
  "method": "GET",
  "header": {}
};

$.ajax(settings).done(function (response){
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  btc2.innerHTML = response.bitcoin.usd;
  eth2.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
  sol.innerHTML = response.solana.usd;
  xrp.innerHTML = response.stellar.usd;
});

var btcInput = document.getElementById("btcInput");
var currencyInput = document.getElementById("currencyInput");
var currencySelect = document.getElementById("currencySelect");
var btc3 = document.getElementById("bitcoin3");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin,solana,tron,stellar&vs_currencies=ngn",
  "method": "GET",
  "header": {}
};

$.ajax(settings).done(function (response){
  btc3.innerHTML = response.bitcoin.ngn;
  
});

btcInput.addEventListener("input", function() {
  // Get the selected currency
  var selectedCurrency = currencySelect.value;

  // Get the BTC value entered by the user
  var btcValue = parseFloat(btcInput.value) || 0;

  // Get the conversion rate for the selected currency
  var conversionRate = getConversionRate(selectedCurrency);

  // Calculate the converted amount
  var convertedAmount = btcValue * conversionRate;

  // Update the currency input field with the converted amount
  currencyInput.value = convertedAmount.toFixed(4);
});

currencyInput.addEventListener("input", function() {
  // Get the selected currency
  var selectedCurrency = currencySelect.value;

  // Get the amount entered by the user in the currency input field
  var currencyAmount = parseFloat(currencyInput.value) || 0;

  // Get the conversion rate for the selected currency
  var conversionRate = getConversionRate(selectedCurrency);

  // Calculate the converted amount back to BTC
  var convertedToBTC = currencyAmount / conversionRate;

  // Update the BTC input field with the converted amount
  btcInput.value = convertedToBTC.toFixed(4);
});


function getConversionRate(currency) {

  var conversionRates = {
      ngn: 4600000, 
      usd: 55000,   
      eur: 47000,  
      gbp: 40000    
  };

  return conversionRates[currency] || 1; // Default to 1 if currency not found
}

/*
btcInput.addEventListener("input", function () {
  var inputValue = parseFloat(btcInput.value);
  if (!isNaN(inputValue)) {
      var conversionRate = parseFloat(btc3.innerHTML);
      var equivalentValue = inputValue * conversionRate;

      btc3.textContent = equivalentValue.toFixed(2);
  }
});
*/

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

const NavbarNav = document.getElementById("navbarNav");

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

NavbarNav.addEventListener('hidden.bs.collapse', () => {
  
  NavIcon.classList.remove("fas", "fa-times");
  NavIcon.classList.add("navbar-toggler-icon");
  NavIcon.style.fontSize = "1.25rem";
  isBar = true;
});


const buttons = document.querySelectorAll(".btn-swap");

buttons.forEach(button => {
    const icon = button.querySelector("i");
    let isPlus = true;

    icon.style.transition = "transform 0.7s ease"
    button.addEventListener("click", () => {
        if (isPlus) {
            icon.style.transform = "rotate(45deg)"
            isPlus = false;
        } else {
            icon.style.transform = "rotate(0deg)"
            isPlus = true;
        }
    });
});


const Arrows = document.querySelectorAll(".up-swap");

Arrows.forEach(Arrow => {
    const icon = Arrow.querySelector("i");
    let isUp = true;

    icon.style.transition = "transform 0.7s ease"
    Arrow.addEventListener("click", () => {
        if (isUp) {
            icon.style.transform = "rotate(180deg)";
            isUp = false;
        } else {
            icon.style.transform = "rotate(0deg)"
            isUp = true;
        }
    });
});

const yearElement = document.getElementById('yearCounter');
        const targetValue = 2023;
        let currentValue = 0;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounting();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }
        );

        observer.observe(yearElement);

        function animateCounting() {
            const startTime = performance.now();

            function updateValue(timestamp) {
              const progress = (timestamp - startTime) / 800;
              currentValue = Math.min(progress * targetValue, targetValue);
              yearElement.textContent = Math.floor(currentValue);

              if (progress < 1) {
                  requestAnimationFrame(updateValue);
              };
            };

            requestAnimationFrame(updateValue);
        }



  