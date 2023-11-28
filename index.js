var btc = document.getElementById("bitcoin");
var btc4 = document.getElementById("bitcoin4");
var eth3 = document.getElementById("ethereum3");
var eth = document.getElementById("ethereum");
var btc2 = document.getElementById("bitcoin2");
var eth2 = document.getElementById("ethereum2");
var doge = document.getElementById("dogecoin");
var sol = document.getElementById("solana");
var sol2 = document.getElementById("solana2");
var xrp = document.getElementById("stellar");
var trx = document.getElementById("tron");
var mcBitcoin = document.getElementById("mc-bitcoin");
var mcEthereum = document.getElementById("mc-ethereum");
var mcSolana = document.getElementById("mc-solana");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin,solana,tron,stellar&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&sparkline=true",
  "method": "GET",
  "header": {}
};

$.ajax(settings).done(function (response){
  btc.innerHTML = numberWithCommas(response.bitcoin.usd);
  trx.innerHTML = response.tron.usd;
  eth.innerHTML = response.ethereum.usd;
  btc2.innerHTML = numberWithCommas(response.bitcoin.usd);
  eth2.innerHTML = response.ethereum.usd;
  btc4.innerHTML = numberWithCommas(response.bitcoin.usd);
  eth3.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
  sol.innerHTML = response.solana.usd;
  sol2.innerHTML = response.solana.usd;
  xrp.innerHTML = response.stellar.usd;
  mcBitcoin.innerHTML = numberWithCommas(Math.floor(response.bitcoin.usd_market_cap));
  mcEthereum.innerHTML = numberWithCommas(Math.floor(response.ethereum.usd_market_cap));
  mcSolana.innerHTML = numberWithCommas(Math.floor(response.solana.usd_market_cap));

  var changeBitcoinElements = document.querySelectorAll(".change-bitcoin");

  changeBitcoinElements.forEach(function (element) {
    element.innerHTML = response.bitcoin.usd_24h_change.toFixed(2) + "%";
  
    if (response.bitcoin.usd_24h_change < 0) {
      element.style.color = "red";
    } else {
      element.style.color = "green";
    }
  });

  var changeEthereumElements = document.querySelectorAll(".change-ethereum");

  changeEthereumElements.forEach(function (element) {
    element.innerHTML = response.ethereum.usd_24h_change.toFixed(2) + "%";
  
    if (response.ethereum.usd_24h_change < 0) {
      element.style.color = "red";
    } else {
      element.style.color = "green";
    }
  });

  var changeSolanaElements = document.querySelectorAll(".change-solana");

  changeSolanaElements.forEach(function (element) {
    element.innerHTML = response.solana.usd_24h_change.toFixed(2) + "%";
  
    if (response.solana.usd_24h_change < 0) {
      element.style.color = "red";
    } else {
      element.style.color = "green";
    }
  });

  var changeDogecoin = document.getElementById("change-dogecoin");

  changeDogecoin.innerHTML = response.dogecoin.usd_24h_change.toFixed(2) + "%";

  changeDogecoin.style.color = "white";

  if (response.dogecoin.usd_24h_change < 0) {
    changeDogecoin.style.color = "red";
  } else {
    changeDogecoin.style.color = "green";
  }

  var changeTron = document.getElementById("change-tron");

  changeTron.innerHTML = response.tron.usd_24h_change.toFixed(2) + "%";

  changeTron.style.color = "white";

  if (response.tron.usd_24h_change < 0) {
    changeTron.style.color = "red";
  } else {
    changeTron.style.color = "green";
  }

  var changeStellar = document.getElementById("change-stellar");

  changeStellar.innerHTML = response.stellar.usd_24h_change.toFixed(2) + "%";

  changeStellar.style.color = "white";

  if (response.stellar.usd_24h_change < 0) {
    changeStellar.style.color = "red";
  } else {
    changeStellar.style.color = "green";
  }
      
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*
var btcInput = document.getElementById("btcInput");
var currencyInput = document.getElementById("currencyInput");
var currencySelect = document.getElementById("currencySelect");
var btc3 = document.getElementById("bitcoin3");
var response; // Declare response variable in a wider scope

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin,solana,tron,stellar&vs_currencies=ngn&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
  "method": "GET",
  "header": {}
};


$.ajax(settings).done(function (data){
  response = data; // Assign data to the response variable
  btc3.innerHTML = numberWithCommas(response.bitcoin.ngn);
});

btcInput.addEventListener("input", function() {
  var selectedCurrency = currencySelect.value;
  var btcValue = parseFloat(btcInput.value) || 0;
  var conversionRate = getConversionRate(selectedCurrency);
  var convertedAmount = btcValue * conversionRate;
  currencyInput.value = convertedAmount.toFixed(4);
});

currencyInput.addEventListener("input", function() {
  var selectedCurrency = currencySelect.value;
  var currencyAmount = parseFloat(currencyInput.value) || 0;
  var conversionRate = getConversionRate(selectedCurrency);
  var convertedToBTC = currencyAmount / conversionRate;
  btcInput.value = convertedToBTC.toFixed(4);
});

function getConversionRate(currency) {
  var conversionRates = {
    ngn: response.bitcoin.ngn,
    usd: response.bitcoin.usd,
    eur: response.bitcoin.eur,
    gbp: response.bitcoin.gbp    
  };
  return conversionRates[currency] || 1;
}

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
const AllFlow = document.querySelectorAll('.flow-body');

h1Elements.forEach((element) => {
    element.classList.add('hidden');
});

CardBody.forEach((element) => {
  element.classList.add('card-body');
});


AllRow.forEach((element) => {
  element.classList.add('rows');
});

AllFlow.forEach((element) => {
  element.classList.add('flow-body');
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

    if (elementOffset.top >=  0 && elementOffset.bottom <= window.innerHeight) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
  });

  AllFlow.forEach((element) => {
    const elementOffset = element.getBoundingClientRect();

    if (elementOffset.top <= /* 0 && elementOffset.bottom <=*/ window.innerHeight) {
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
const NavIcons = document.querySelectorAll(".navbar-toggler-icon");
let isBar = true;

const NavbarNav = document.getElementById("navbarNav");

NavToggler.addEventListener('click', () => {
  NavIcons.forEach(icon => {
    if (isBar) {
      icon.classList.remove("navbar-toggler-icon");
      icon.classList.add("fas", "fa-times");
      icon.style.fontSize = "24px";
      // icon.style.transform = "rotate(30deg)";
    } else {
      icon.classList.remove("fas", "fa-times");
      icon.classList.add("navbar-toggler-icon");
      // icon.style.transform = "none";
      icon.style.fontSize = "1.25rem";
    }
  });

  isBar = !isBar;
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
};


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1",
  "method": "GET",
  "header": {}
};

$.ajax(settings).done(function (response) {
  // Extract timestamps and prices
  var timestamps = response.prices.map(entry => entry[0]);
  var prices = response.prices.map(entry => entry[1]);

  // Use timestamps and prices to render the chart
  renderBitcoinChart(timestamps, prices);
});

function renderBitcoinChart(timestamps, prices) {
  var ctx = document.getElementById('bitcoinChart').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: timestamps,
      datasets: [{
        label: 'Bitcoin 24hr Price Change',
        data: prices,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  });
};


$(document).ready(function () {

  $.ajax({
    url: "https://api.coingecko.com/api/v3/exchange_rates",
    method: "GET",
    success: function (response) {

      var rates = response.rates;
      var btcToNgnRate = rates.ngn.value;
      var btcToUsdRate = rates.usd.value;
      var btcToEurRate = rates.eur.value;
      var btcToGbpRate = rates.gbp.value;

      var currencySymbols = {
        ngn: "NGN",
        usd: "USD",
        eur: "EUR",
        gbp: "GBP"
      };

      $("#bitcoin3").text(numberWithCommas(btcToNgnRate.toFixed(2)) + " " + currencySymbols.ngn);
      $("#bitcoin3").text(numberWithCommas(btcToUsdRate.toFixed(2)) + " " + currencySymbols.usd);
      $("#bitcoin3").text(numberWithCommas(btcToEurRate.toFixed(2)) + " " + currencySymbols.eur);
      $("#bitcoin3").text(numberWithCommas(btcToGbpRate.toFixed(2)) + " " + currencySymbols.gbp);


      $("#btcInput").on("input", function () {
        var btcAmount = $(this).val();
        var convertedAmount = btcAmount * btcToNgnRate;
        $("#currencyInput").val(convertedAmount.toFixed(2) + " " + currencySymbols.ngn);
      });

      $("#currencySelect").on("change", function () {
        var selectedCurrency = $(this).val();
        var newRate = rates[selectedCurrency].value;

        $("#bitcoin3").text(newRate.toFixed(2) + " " + currencySymbols[selectedCurrency]);
        var btcAmount = $("#btcInput").val();
        var convertedAmount = btcAmount * newRate;
        $("#currencyInput").val(convertedAmount.toFixed(2) + " " + currencySymbols[selectedCurrency]);
      });

      $("#currencySelect").val("ngn").change();
    },
    error: function (error) {
      console.error("Error fetching exchange rates:", error);
    },
  });
});
