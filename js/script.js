//var nameYourBurger = confirm('Would you like to create Your Burger?')
var createPrice= document.getElementsByClassName('create-prices-btn')[0];
var totalPrice = document.getElementById('total-price');

var discountCode=['CODE1','CODE2', 'CODE3','CODE4', 'CODE5'];
var disCoupon = document.getElementById('dis-coupon');
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