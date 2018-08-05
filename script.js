// This code is for wordpress form
//
//
let value;
let roundPrice = document.getElementById('buttonPrice');
formUnitPrice = document.getElementById('formUnitPrice');
formBargain = document.getElementById('formBargain');
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
    if (document.getElementById('125ButtonStandard') != null) {
        if (document.querySelector('label#buttonQuantity input') != null) {
            if (value >= 50 && value < 100) {
                price = value * .3;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.30 each';
                formBargain.innerText = 'Get them for 25 cents each when you get 100!';
            } else if (value >= 100 && value < 250) {
                price = value * .25;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.25 each';
                formBargain.innerText = 'Get them for 24 cents each when you get 250!';
            } else if (value >= 250 && value < 417) {
                price = value * .24;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.24 each';
                formBargain.innerText = 'Get them for 22 cents each when you get 500!';
            } else if ( value >= 417 && value < 500) {
                price = value * .24;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.24';
                formBargain.innerText = 'Get them for 22 cents each when you get 500!';
            } else if ( value >= 500 && value < 1000) {
                price = value * .22;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.22';
                formBargain.innerText = 'Get them for 21 cents each when you get 1000!';
            } else if (value >= 1000 && value < 4762) {
                price = value * .21;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.21 each';
                formBargain.innerText = '';
            } else if (value >= 4762 && value <= 10000) {
                price = value * .21;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(6));
                formUnitPrice.innerText = '$0.21 each';
                formBargain.innerText = '';
            } else {
                roundPrice.innerText = "Please choose an amount between 50 and 10,000.";
                formUnitPrice.innerText = '';
                formBargain.innerText = '';
            }
        } 
    } else if (document.getElementById('125ButtonFoil')) {
        if (document.querySelector('label#buttonQuantity input') != null) {
            if (value >= 50 && value < 100) {
                price = value * .44;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.44 each';
                formBargain.innerText = 'Get them for 37 cents each when you get 100!';
            } else if (value >= 100 && value < 250) {
                price = value * .37;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.37 each';
                formBargain.innerText = 'Get them for 34 cents each when you get 250!';
            } else if (value >= 250 && value < 295) {
                price = value * .34;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.34 each';
                formBargain.innerText = 'Get them for 30 cents each when you get 500!';
            } else if ( value >= 295 && value < 500) {
                price = value * .34;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.34';
                formBargain.innerText = 'Get them for 30 cents each when you get 500!';
            } else if ( value >= 500 && value < 1000) {
                price = value * .3;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.30';
                formBargain.innerText = 'Get them for 28 cents each when you get 1000!';
            } else if (value >= 1000 && value < 3572) {
                price = value * .28;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.28 each';
                formBargain.innerText = '';
            } else if (value >= 3572 && value <= 10000) {
                price = value * .28;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(6));
                formUnitPrice.innerText = '$0.28 each';
                formBargain.innerText = '';
            } else {
                roundPrice.innerText = "Please choose an amount between 50 and 10,000.";
                formUnitPrice.innerText = '';
                formBargain.innerText = '';
            }
        } 
    } else if (document.getElementById('125MagnetStandard')) {
        if (document.querySelector('label#buttonQuantity input') != null) {
            if (value >= 25 && value < 50) {
                price = value * 1;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$1.00 each';
                formBargain.innerText = 'Get them for 80 cents each when you get 50!';
            } else if (value >= 50 && value < 100) {
                price = value * .8;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.80 each';
                formBargain.innerText = 'Get them for 70 cents each when you get 100!';
            } else if (value >= 100 && value < 143) {
                price = value * .7;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.70 each';
                formBargain.innerText = 'Get them for 60 cents each when you get 250!';
            } else if (value >= 143 && value < 250) {
                price = value * .7;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.70 each';
                formBargain.innerText = 'Get them for 60 cents each when you get 250!';
            } else if ( value >= 250 && value < 500) {
                price = value * .6;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.60';
                formBargain.innerText = 'Get them for 50 cents each when you get 500!';
            } else if ( value >= 500 && value < 1000) {
                price = value * .5;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.50';
                formBargain.innerText = 'Get them for 48 cents each when you get 1000!';
            } else if (value >= 1000 && value < 2084) {
                price = value * .48;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.48 each';
                formBargain.innerText = 'Get them for 45 cents each when you get 2500!';
            } else if (value >= 2084 && value <= 2500) {
                price = value * .48;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(6));
                formUnitPrice.innerText = '$0.48 each';
                formBargain.innerText = 'Get them for 45 cents each when you get 2500!';
            } else if (value >=2500 && value <= 10000) {
                price = value * .45;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(6));
                formUnitPrice.innerText = '$0.45 each';
                formBargain.innerText = '';
            } else {
                roundPrice.innerText = "Please choose an amount between 25 and 10,000.";
                formUnitPrice.innerText = '';
                formBargain.innerText = '';
            }
        } 
    } else if (document.getElementById('125MagnetFoil')) {
        if (document.querySelector('label#buttonQuantity input') != null) {
            if (value >= 25 && value < 100) {
                price = value * 1.2;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$1.20 each';
                formBargain.innerText = 'Get them for 94 cents each when you get 50!';
            } else if (value >= 50 && value < 100) {
                price = value * .94;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.94 each';
                formBargain.innerText = 'Get them for 82 cents each when you get 100!';
            } else if (value >= 100 && value < 122) {
                price = value * .82;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.82 each';
                formBargain.innerText = 'Get them for 70 cents each when you get 250!';
            } else if (value >= 122 && value < 250) {
                price = value * .82;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(4));
                formUnitPrice.innerText = '$0.82 each';
                formBargain.innerText = 'Get them for 70 cents each when you get 250!';
            } else if ( value >= 250 && value < 500) {
                price = value * .7;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.70';
                formBargain.innerText = 'Get them for 58 cents each when you get 500!';
            } else if ( value >= 500 && value < 1000) {
                price = value * .58;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.58';
                formBargain.innerText = 'Get them for 55 cents each when you get 1000!';
            } else if (value >= 1000 && value < 1819) {
                price = value * .55;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(5));
                formUnitPrice.innerText = '$0.55 each';
                formBargain.innerText = 'Get them for 52 cents each when you get 2500!';
            } else if (value >= 1819 && value <= 2500) {
                price = value * .55;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(6));
                formUnitPrice.innerText = '$0.55 each';
                formBargain.innerText = 'Get them for 52 cents each when you get 2500!';
            } else if (value >= 2500 && value <= 10000) {
                price = value * .52;
                price = Math.round(price * 100) / 100;
                roundPrice.innerText = "Subtotal: $" + (price.toPrecision(6));
                formUnitPrice.innerText = '$0.52 each';
                formBargain.innerText = '';
            } else {
                roundPrice.innerText = "Please choose an amount between 25 and 10,000.";
                formUnitPrice.innerText = '';
                formBargain.innerText = '';
            }
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
let product = document.getElementById('quoteProduct');
let finish = document.getElementById('quoteFinish');
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
    if (document.getElementById('quoteCalculator') != null) {
        if (product.value == 'buttons') {
            if (finish.value == 'standard') {
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
                        unitPrice.innerText = '';
                        bargain.innerText = '';
                    }
                }
            } else if (finish.value == 'foil') {
                if (document.getElementById('quoteQuantity') != null) {
                    if (quantity >= 50 && quantity < 100) {
                        roughQuote = quantity * .44;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
                        unitPrice.innerText = '$0.44 each';
                        bargain.innerText = 'Get them for 37 cents each when you get 100!';
                    } else if (quantity >= 100 && quantity < 250) {
                        roughQuote = quantity * .37;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
                        unitPrice.innerText = '$0.37 each';
                        bargain.innerText = 'Get them for 34 cents each when you get 250!';
                    } else if (quantity >= 250 && quantity < 295) {
                        roughQuote = quantity * .34;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
                        unitPrice.innerText = '$0.34 each';
                        bargain.innerText = 'Get them for 30 cents each when you get 500!';
                    } else if ( quantity >= 295 && quantity < 500) {
                        roughQuote = quantity * .34;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.34 each';
                        bargain.innerText = 'Get them for 30 cents each when you get 500!';
                    } else if ( quantity >= 500 && quantity < 1000) {
                        roughQuote = quantity * .30;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.30 each';
                        bargain.innerText = 'Get them for 28 cents each when you get 1000!';
                    } else if (quantity >= 1000 && quantity < 3572) {
                        roughQuote = quantity * .28;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.28 each';
                        bargain.innerText = '';
                    } else if (quantity >= 3572 && quantity <= 10000) {
                        roughQuote = quantity * .28;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(6));
                    } else {
                        finalQuote.innerText = "Please choose an amount between 50 and 10,000.";
                        unitPrice.innerText = '';
                        bargain.innerText = '';
                    }
                }
            }
        } else if (product.value == 'magnets') {
            if (finish.value == 'standard') {
                if (document.getElementById('quoteQuantity') != null) {
                    if (quantity >= 25 && quantity < 50) {
                        roughQuote = quantity * 1;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
                        unitPrice.innerText = '$1.00 each';
                        bargain.innerText = 'Get them for 80 cents each when you get 50!';
                    } else if (quantity >= 50 && quantity < 100) {
                        roughQuote = quantity * .8;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
                        unitPrice.innerText = '$0.80 each';
                        bargain.innerText = 'Get them for 70 cents each when you get 100!';
                    } else if (quantity >= 100 && quantity < 143) {
                        roughQuote = quantity * .7;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
                        unitPrice.innerText = '$0.70 each';
                        bargain.innerText = 'Get them for 60 cents each when you get 250!';
                    } else if (quantity >= 143 && quantity < 250) {
                        roughQuote = quantity * .7;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.70 each';
                        bargain.innerText = 'Get them for 60 cents each when you get 250!';
                    } else if (quantity >= 250 && quantity < 500) {
                        roughQuote = quantity * .6;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.60 each';
                        bargain.innerText = 'Get them for 50 cents each when you get 500!';
                    } else if ( quantity >= 500 && quantity < 1000) {
                        roughQuote = quantity * .5;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.50 each';
                        bargain.innerText = 'Get them for 48 cents each when you get 1000!';
                    } else if (quantity >= 1000 && quantity < 2084) {
                        roughQuote = quantity * .48;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.48 each';
                        bargain.innerText = 'Get them for 45 cents each when you get 2500!';
                    } else if (quantity >= 2084 && quantity < 2500) {
                        roughQuote = quantity * .48;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(6));
                        unitPrice.innerText = '$0.48 each';
                        bargain.innerText = 'Get them for 45 cents each when you get 2500!';
                    } else if (quantity >= 2500 && quantity <= 10000) {
                        roughQuote = quantity * .45;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(6));
                        unitPrice.innerText = '$0.45 each';
                        bargain.innerText = '';
                    } else {
                        finalQuote.innerText = "Please choose an amount between 25 and 10,000.";
                        unitPrice.innerText = '';
                        bargain.innerText = '';
                    }
                }
            } else if (finish.value == 'foil') {
                if (document.getElementById('quoteQuantity') != null) {
                    if (quantity >= 25 && quantity < 50) {
                        roughQuote = quantity * 1.2;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
                        unitPrice.innerText = '$1.20 each';
                        bargain.innerText = 'Get them for 94 cents each when you get 50!';
                    } else if (quantity >= 50 && quantity < 100) {
                        roughQuote = quantity * .94;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
                        unitPrice.innerText = '$0.94 each';
                        bargain.innerText = 'Get them for 82 cents each when you get 100!';
                    } else if (quantity >= 100 && quantity < 122) {
                        roughQuote = quantity * .82;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(4));
                        unitPrice.innerText = '$0.82 each';
                        bargain.innerText = 'Get them for 70 cents each when you get 250!';
                    } else if (quantity >= 122 && quantity < 250) {
                        roughQuote = quantity * .82;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.82 each';
                        bargain.innerText = 'Get them for 70 cents each when you get 250!';
                    } else if (quantity >= 250 && quantity < 500) {
                        roughQuote = quantity * .7;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.70 each';
                        bargain.innerText = 'Get them for 58 cents each when you get 500!';
                    } else if ( quantity >= 500 && quantity < 1000) {
                        roughQuote = quantity * .58;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.58 each';
                        bargain.innerText = 'Get them for 55 cents each when you get 1000!';
                    } else if (quantity >= 1000 && quantity < 1819) {
                        roughQuote = quantity * .55;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(5));
                        unitPrice.innerText = '$0.55 each';
                        bargain.innerText = 'Get them for 52 cents each when you get 2500!';
                    } else if (quantity >= 1819 && quantity < 2500) {
                        roughQuote = quantity * .55;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(6));
                        unitPrice.innerText = '$0.55 each';
                        bargain.innerText = 'Get them for 52 cents each when you get 2500!';
                    } else if (quantity >= 2500 && quantity <= 10000) {
                        roughQuote = quantity * .52;
                        roughQuote = Math.round(roughQuote * 100) / 100;
                        finalQuote.innerText = "Subtotal: $" + (roughQuote.toPrecision(6));
                        unitPrice.innerText = '$0.52 each';
                        bargain.innerText = '';
                    } else {
                        finalQuote.innerText = "Please choose an amount between 25 and 10,000.";
                        unitPrice.innerText = '';
                        bargain.innerText = '';
                    }
                }
            }
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