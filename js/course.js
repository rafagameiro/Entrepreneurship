/*
Add the package the user wants to buy to the shopping cart
increments the cart counter by 1
TODO add info to a real list with all the products the user wants to buy
 */
$('.modal-footer .btn').click(function () {
    let counter = $('.cart-counter').text();
    $('.cart-counter').text(+counter.substring(1) + 1);
});


const courses = [
    {
        id: 1,
        image: "images/Modules/Colors/ColorsPortuguese.png",
        title: 'Cores (LGP)',
        likes: 1,
        language: "Portuguese",
        price: "9,99"
    },
    {
        id: 2,
        image: "images/Modules/Colors/ColorsAmerican.png",
        title: 'Cores (ASL)',
        likes: 2,
        language: "American",
        price: "9,99"
    },
    {
        id: 3,
        image: "images/Modules/Colors/ColorsBritish.png",
        title: 'Cores (BSL)',
        likes: 2,
        language: "British",
        price: "9,99"
    },
    {
        id: 4,
        image: "images/Modules/Colors/ColorsAustralian.png",
        title: 'Cores (AUSLAN)',
        likes: 2,
        language: "Australian",
        price: "9,99"
    },
    {
        id: 5,
        image: "images/Modules/Emotions/EmotionsPortuguese.png",
        title: 'Emoções (LGP)',
        likes: 2,
        language: "Portuguese",
        price: "9,99"
    },
    {
        id: 6,
        image: "images/Modules/Emotions/EmotionsAmerican.png",
        title: 'Emoções (ASL)',
        likes: 2,
        language: "American",
        price: "9,99"
    },
    {
        id: 7,
        image: "images/Modules/Emotions/EmotionsBritish.png",
        title: 'Emoções (BSL)',
        likes: 2,
        language: "British",
        price: "9,99"
    },
    {
        id: 8,
        image: "images/Modules/Emotions/EmotionsAustralian.png",
        title: 'Emoções (AUSLAN)',
        likes: 2,
        language: "Australian",
        price: "9,99"
    },
    {
        id: 9,
        image: "images/Modules/Calendar/CalendarPortuguese.png",
        title: 'Calendário (LGP)',
        likes: 2,
        language: "Portuguese",
        price: "9,99"
    },
    {
        id: 10,
        image: "images/Modules/Calendar/CalendarAmerican.png",
        title: 'Calendário (ASL)',
        likes: 2,
        language: "American",
        price: "9,99"
    },
    {
        id: 11,
        image: "images/Modules/Calendar/CalendarBritish.png",
        title: 'Calendário (BSL)',
        likes: 2,
        language: "British",
        price: "9,99"
    },
    {
        id: 12,
        image: "images/Modules/Calendar/CalendarAustralian.png",
        title: 'Calendário (AUSLAN)',
        likes: 2,
        language: "Australian",
        price: "9,99"
    },
    {
        id: 13,
        image: "images/Modules/Alphabet/AlphabetPortuguese.png",
        title: 'Alfabeto (LGP)',
        likes: 2,
        language: "Portuguese",
        price: "9,99"
    },
    {
        id: 14,
        image: "images/Modules/Alphabet/AlphabetAmerican.png",
        title: 'Alfabeto (ASL)',
        likes: 2,
        language: "American",
        price: "9,99"
    },
    {
        id: 15,
        image: "images/Modules/Alphabet/AlphabetBritish.png",
        title: 'Alfabeto (BSL)',
        likes: 2,
        language: "British",
        price: "9,99"
    },
    {
        id: 16,
        image: "images/Modules/Alphabet/AlphabetAustralian.png",
        title: 'Alfabeto (AUSLAN)',
        likes: 2,
        language: "Australian",
        price: "9,99"
    },
    {
        id: 17,
        image: "images/Modules/Numbers/NumbersPortuguese.png",
        title: 'Números (LGP)',
        likes: 2,
        language: "Portuguese",
        price: "9,99"
    },
    {
        id: 18,
        image: "images/Modules/Numbers/NumbersAmerican.png",
        title: 'Números (ASL)',
        likes: 2,
        language: "American",
        price: "9,99"
    },
    {
        id: 19,
        image: "images/Modules/Numbers/NumbersBritish.png",
        title: 'Números (BSL)',
        likes: 2,
        language: "British",
        price: "9,99"
    },
    {
        id: 20,
        image: "images/Modules/Numbers/NumbersAustralian.png",
        title: 'Números (AUSLAN)',
        likes: 2,
        language: "Australian",
        price: "9,99"
    }, {
        id: 21,
        image: "images/Modules/Animals/AnimalsPortuguese.png",
        title: 'Animais (LGP)',
        likes: 2,
        language: "Portuguese",
        price: "9,99"
    }, {
        id: 22,
        image: "images/Modules/Animals/AnimalsAmerican.png",
        title: 'Animais (ASL)',
        likes: 2,
        language: "American",
        price: "9,99"
    }, {
        id: 23,
        image: "images/Modules/Animals/AnimalsBritish.png",
        title: 'Animais (BSL)',
        likes: 2,
        language: "British",
        price: "9,99"
    }, {
        id: 24,
        image: "images/Modules/Animals/AnimalsAustralian.png",
        title: 'Animais (AUSLAN)',
        likes: 2,
        language: "Australian",
        price: "9,99"
    }
];