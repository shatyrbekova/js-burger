//var nameYourBurger = confirm('Would you like to create Your Burger?')
var createPrice= document.getElementsByClassName('create-prices-btn')[0];
var totalPrice = document.getElementById('total-price');

createPrice.addEventListener('click', function(){

var initialPrice = 50;
var  priceCheck  = document.getElementsByClassName('sum-check');

for (var y=0; y <priceCheck.length; y++){

    if (priceCheck[y].checked) {
        initialPrice +=parseInt (priceCheck[y].value)
    }
}
     totalPrice.innerHTML =  '$' +  initialPrice;
})