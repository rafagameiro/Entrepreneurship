'use strict';

const e = React.createElement;

class cartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    generateBreaker() {
        if (this.props.id !== 1)
            return e(
                'div',
                {
                    className: "container-fluid m-0 mr-4 ml-4 p-0 w-100",
                    style: {height: "1px", borderTop: "1px solid grey"}
                }
            )
    }

    render() {
        return e(
            'div',
            {className: 'row ml-0 mr-0 bg-white'},
            this.generateBreaker(),
            e(
                'div',
                {className: "col-2 p-1 pt-3 p-lg-3 text-center"},
                e(
                    'img',
                    {src: this.props.image}
                )
            ),
            e(
                'div',
                {className: "col-7 col-sm-8 col-md-9 p-3"},
                e(
                    'a',
                    {href: "course.html", className: "course-name mt-3"},
                    this.props.name
                ),
                e(
                    'br'
                ),
                e(
                    'span',
                    {className: "btn-remove", id: "item-" + this.props.id},
                    'Remover'
                )
            ),
            e(
                'div',
                {className: "col-1 pt-3 pr-4 text-right"},
                this.props.price
            )
        );
    }
}

let cart = [
    {id: 1, image: "images/Modules/Colors/ColorsAmerican.png", name: 'Cores', price: '9.99'},
    {id: 2, image: "images/Modules/Numbers/NumbersBritish.png", name: 'Números', price: '9.99'}
];

let totalPrice;

function listCart() {
    totalPrice = 0;
    for (let i = 0; i < cart.length; i++)
        totalPrice += +cart[i].price;

    $('#items-price').text(totalPrice + "€");

    ReactDOM.render(
        cart.map(elem => {
            return e(cartList, elem)
        }), document.getElementById('shop-cart'));
}

$(document).ready(listCart());

/**
 * Removes the selected element from the cart list
 */
$('.btn-remove').click(function () {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === +$(this).attr('id').substring(5)) {
            cart.splice(i, 1);
            break;
        }
    }

    listCart();
});

/**
 * After closing the modal it will reset all changes that were done
 */
$('#paymentModal').on("hide.bs.modal", function () {
    $('#start').addClass('active');
    $('#start a').removeClass('active');
    $('#card-method').removeClass('active');
    $('#paypal-method').removeClass('active');
    $('#card-number').val("");
    $('#card-cvc').val("");
    $('#email1').val("");
    $('#email2').val("");
    $('.modal-footer .btn-primary').attr("disabled", true);
});

$('.modal-footer .btn-secondary').click(function () {
    if ($('#start').hasClass('active'))
        $('#paymentModal').modal('toggle');

    $('#start').addClass('active');
    $('#start a').removeClass('active');
    $('#card-method').removeClass('active');
    $('#paypal-method').removeClass('active');
});

const NUMBER_LENGTH = 16;
const CVC_LENGTH = 3;

/**
 * Checks if the typed card number and CVC have the right length
 * and if they have, allow the user to proceed with the checkout
 */
$('#card-number, #card-cvc').keyup(function () {
    let number = $('#card-number').val();
    let cvc = $('#card-cvc').val();

    let length = false;
    if (number.indexOf(" ") !== -1) {
        number = number.split(" ");

        let sum = 0;
        for (let i = 0; i < number.length; i++)
            sum += number[i].length;

        if (sum === NUMBER_LENGTH)
            length = true;
    } else
        length = number.length === NUMBER_LENGTH;

    if (length && cvc.length === CVC_LENGTH)
        $('.modal-footer .btn-primary').attr("disabled", false);
    else
        $('.modal-footer .btn-primary').attr("disabled", true);
});

/**
 * (Computer Version)
 * Checks if the typed email address is correctly typed and if it is,
 * allows the user to proceed with the checkout
 */
$('#email1').keyup(function () {
    let email = $('#email1').val();
    if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== -1)
        $('.modal-footer .btn-primary').attr("disabled", false);
    else
        $('.modal-footer .btn-primary').attr("disabled", true);
});

/**
 * (Mobile Version)
 * Checks if the typed email address is correctly typed and if it is,
 * allows the user to proceed with the checkout
 */
$('#email2').keyup(function () {
    let email = $('#email2').val();
    if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== -1)
        $('.modal-footer .btn-primary').attr("disabled", false);
    else
        $('.modal-footer .btn-primary').attr("disabled", true);
});

/**
 * After doing the payment method step, the layout on the right will change
 * and then the user can conclude the transaction
 */
$('.modal-footer .btn-primary').click(function () {
    $('#btn-checkout').text('Efetuar Pagamento');
    $('#btn-checkout').attr('data-target', '#successModal');
    $('#paymentModal').modal('toggle');
});

/**
 * After showing the modal, sets a timer to redirect the user to the homepage
 */
$('#successModal').on("show.bs.modal", function () {
    setTimeout(function () {
        $('#successModal').modal('toggle');
        location.href = "index.html";
    }, 800);
});
