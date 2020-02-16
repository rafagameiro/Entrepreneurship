/*
Add the package the user wants to buy to the shopping cart
increments the cart counter by 1
TODO add info to a real list with all the products the user wants to buy
 */
$('#btn-buy').click(function () {
    let counter = $('.cart-counter').text();
    $('.cart-counter').text(+counter.substring(counter.length/2) + 1);
});
