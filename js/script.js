var nameYourBurger = confirm('Would you like to create Your Burger?')
var nameBurgerPrompt=prompt('Please, Name Your Burger.');
var createPrice= document.getElementsByClassName('create-prices-btn')[0];
var totalPrice = document.getElementById('total-price');
var nameBurger = document.getElementById('name-your-burger');

nameBurger.innerHTML=nameBurgerPrompt;

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

     
     var discountCodePercentTwenty ='1A3B1H';
     var discount = 20;
     var discountCodePercentTen=['CODE1','CODE2', 'CODE3','CODE4', 'CODE5'];
     var discount = 10;

    var flag = false;

    for (var i = 0; i < discountCodePercentTen.length; i++){
        if (discountCodePercentTen[i] === disCoupon.value){
            flag = true;
        }
    }

    if(flag) {

        var priceDiscountTen = initialPrice - (initialPrice / 100 * 10);
        totalPrice.innerHTML = '$' + priceDiscountTen.toFixed(2);

    } else if (disCoupon.value === discountCodePercentTwenty){
        var priceDiscountTwenty = initialPrice - (initialPrice / 100 * 20);
        totalPrice.innerHTML = '$' + priceDiscountTwenty.toFixed(2);
    } 
    else if(disCoupon.value.length > 0) {
        alert ('Your discount code is invalid');
    }
})

