// This code is for wordpress form
//
//
let value;
let roundPrice = document.getElementById('buttonPrice');
let price;
let priceInterval;
let valueInterval;

function checkPrice() {
    valueInterval = setInterval(checkValue, 500);
    priceInterval = setInterval(livePrice, 500);
}

function checkValue() {
    if (document.querySelector('label#buttonQuantity input') != null) {
        value = document.querySelector('label#buttonQuantity input').value;
    }
}

function livePrice() {
    if (document.querySelector('label#buttonQuantity input') != null) {
        if (value >= 50 && value < 100) {
            price = value * .3;
            price = Math.round(price * 100) / 100;
            roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
        } else if (value >= 100 && value < 250) {
            price = value * .25;
            price = Math.round(price * 100) / 100;
            roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
        } else if (value >= 250 && value < 417) {
            price = value * .24;
            price = Math.round(price * 100) / 100;
            roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
        } else if ( value >= 417 && value < 500) {
            price = value * .24;
            price = Math.round(price * 100) / 100;
            roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
        } else if ( value >= 500 && value < 1000) {
            price = value * .22;
            price = Math.round(price * 100) / 100;
            roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
        } else if (value >= 1000 && value < 4762) {
            price = value * .21;
            price = Math.round(price * 100) / 100;
            roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
        } else if (value >= 4762 && value <= 10000) {
            price = value * .21;
            price = Math.round(price * 100) / 100;
            roundPrice.innerText = "Subtotal: $" + (price.toPrecision(6));
        } else {
            roundPrice.innerText = "Please choose an amount between 50 and 10,000.";
        }
    }
}

checkPrice();



// this is for the stand alone quote calculator
//
//

let quantity;
let finalQuote = document.getElementById('finalQuote');
let unitPrice = document.getElementById('unitPrice');
let bargain = document.getElementById('bargain');
let roughQuote;
let liveQuoteInterval;
let quantityInterval;

function updateQuote() {
    quantityInterval = setInterval(checkQuantity, 250);
    liveQuoteInterval = setInterval(liveQuote, 250);
}

function checkQuantity() {
    if (document.getElementById('quoteQuantity') != null) {
        quantity = document.getElementById('quoteQuantity').value;
    }
}

function liveQuote() {
    if (document.getElementById('quoteQuantity') != null) {
        if (quantity >= 50 && quantity < 100) {
            roughQuote = quantity * .3;
            roughQuote = Math.round(roughQuote * 100) / 100;
            finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
            unitPrice.innerText = '$0.30 each';
            bargain.innerText = 'Get them for 25 cents each when you get 100!';
        } else if (quantity >= 100 && quantity < 250) {
            roughQuote = quantity * .25;
            roughQuote = Math.round(roughQuote * 100) / 100;
            finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
            unitPrice.innerText = '$0.25 each';
            bargain.innerText = 'Get them for 24 cents each when you get 250!';
        } else if (quantity >= 250 && quantity < 417) {
            roughQuote = quantity * .24;
            roughQuote = Math.round(roughQuote * 100) / 100;
            finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
            unitPrice.innerText = '$0.24 each';
            bargain.innerText = 'Get them for 22 cents each when you get 500!';
        } else if ( quantity >= 417 && quantity < 500) {
            roughQuote = quantity * .24;
            roughQuote = Math.round(roughQuote * 100) / 100;
            finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
            unitPrice.innerText = '$0.24 each';
            bargain.innerText = 'Get them for 22 cents each when you get 500!';
        } else if ( quantity >= 500 && quantity < 1000) {
            roughQuote = quantity * .22;
            roughQuote = Math.round(roughQuote * 100) / 100;
            finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
            unitPrice.innerText = '$0.22 each';
            bargain.innerText = 'Get them for 21 cents each when you get 1000!';
        } else if (quantity >= 1000 && quantity < 4762) {
            roughQuote = quantity * .21;
            roughQuote = Math.round(roughQuote * 100) / 100;
            finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
            unitPrice.innerText = '$0.21 each';
            bargain.innerText = '';
        } else if (quantity >= 4762 && quantity <= 10000) {
            roughQuote = quantity * .21;
            roughQuote = Math.round(roughQuote * 100) / 100;
            finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(6));
        } else {
            finalQuote.innerText = "Please choose an amount between 50 and 10,000.";
        }
    }
}

updateQuote();


// This is to animate the sliders
//
if (document.querySelector('.fadeIn') != null) {
    var fadeIn = new TimelineMax();

    fadeIn.staggerFrom(".fadeIn", 1, {opacity: 0, delay: 3}, 4);

    fadeIn.repeat(-1);
}