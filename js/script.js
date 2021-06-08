//var nameYourBurger = confirm('Would you like to create Your Burger?')
var createPrice= document.getElementsByClassName('create-prices-btn')[0];
var totalPrice = document.getElementById('total-price');


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

     
     var discountCode ='1A3B1H';
     var discount = 20;
     var discountCodePercentTen=['CODE1','CODE2', 'CODE3','CODE4', 'CODE5'];
     var discount = 10;

     if (disCoupon.value === discountCode){
         var priceDiscount = initialPrice - (initialPrice / 100 * 20);
         totalPrice.innerHTML = '$' + priceDiscount.toFixed(2);
         
     } 
   
    for (var i = 0; i < discountCodePercentTen.length; i++){
        if (discountCodePercentTen[i] ===disCoupon.value){
        var priceDiscountTen = initialPrice - (initialPrice / 100 * 10);
         totalPrice.innerHTML = '$' + priceDiscountTen.toFixed(2);
        } else if (!discountCodePercentTen[i] === disCoupon.value){
            alert('Invalid');
        }
    }
})