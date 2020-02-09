
/*
sets the element with class far, fa-heart visible
and hides the clicked element
also, it decrements the number in the span element by 1
 */
$('.fas.fa-heart').click(function () {
  $(this).siblings('.far.fa-heart').removeClass('d-none');
  $(this).addClass('d-none');
  let num = $(this).siblings('span').text();
  $(this).siblings('span').text(+num - 1);
});

/*
sets the element with class fas, fa-heart visible
and hides the clicked element
also, it increments the number in the span element by 1
 */
$('.far.fa-heart').click(function () {
    $(this).siblings('.fas.fa-heart').removeClass('d-none');
    $(this).addClass('d-none');
    let num = $(this).siblings('span').text();
    $(this).siblings('span').text(+num + 1);
});

/*
Add the package the user wants to buy to the shopping cart
increments the cart counter by 1
TODO add info to a real list with all the products the user wants to buy
 */
$('.modal-footer .btn').click(function () {
   let counter = $('.cart-counter').text();
    $('.cart-counter').text(+counter.substring(2) + 1);
});