const e = React.createElement;

class coursesList extends React.Component {
    constructor(props) {
        super(props);
    }

    addBuyOption() {
        if (!this.props.has) {
            return e(
                'div',
                {className: "container-fluid m-0 mt-2 p-0"},
                e(
                    'button',
                    {
                        className: "btn btn-sm btn-buy btn-primary font-weight-bold w-100"
                    },
                    'Comprar'
                )
            )
        }
    }

    render() {
        return e(
            'div',
            {className: 'col-12 col-md-6 col-lg-3 mb-3'},
            e(
                'div',
                {className: "card h-100"},
                e(
                    'div',
                    {className: "row no-gutters h-100"},
                    e(
                        'div',
                        {className: "col-5 p-1 pt-4"},
                        e(
                            'a',
                            {href: "course.html", style: {textDecoration: "none"}},
                            e(
                                'img',
                                {src: this.props.image, className: "card-img", style: {cursor: "pointer"}}
                            )
                        ),
                    ), e(
                        'div',
                        {className: "col-7"},
                        e(
                            'div',
                            {className: "card-body m-0 h-100"},
                            e(
                                'a',
                                {href: "course.html", style: {textDecoration: "none"}},
                                e(
                                    'h5',
                                    {className: "card-title mt-2", style: {cursor: "pointer"}},
                                    this.props.title
                                )
                            ),
                            e(
                                'div',
                                {className: "container-fluid m-0 mt-4 mb-5 p-0", style: {letterSpacing: "10px"}},
                                e(
                                    'i',
                                    {className: "d-none fas fa-heart"}
                                ),
                                e(
                                    'i',
                                    {
                                        className: "far fa-heart"
                                    }
                                ),
                                e(
                                    'span',
                                    null,
                                    this.props.likes
                                )
                            ),
                            this.addBuyOption()
                        )
                    )
                )
            )
        );
    }
}

class modalBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            'div',
            {className: 'container-fluid m-0 p-0'},
            "Este pacote contém os seguintes conteúdos:",
            e(
                'ul',
                {style: {listStyleType: "disc", padding: "0 0 0 15px"}},
                e(
                    'li',
                    null,
                    this.props.first
                ), e(
                    'li',
                    null,
                    this.props.second
                ), e(
                    'li',
                    null,
                    this.props.third
                ), e(
                    'li',
                    null,
                    this.props.fourth
                ), e(
                    'li',
                    null,
                    this.props.fifth
                ), e(
                    'li',
                    null,
                    this.props.sixth
                )
            )
        );
    }
}

const courses = [
    {
        id: 1,
        image: "images/Modules/Alphabet/AlphabetPortuguese.png",
        title: 'Alfabeto',
        likes: 2,
        language: "Portuguese",
        has: true
    },
    {
        id: 2,
        image: "images/Modules/Calendar/CalendarPortuguese.png",
        title: 'Calendário',
        likes: 2,
        language: "Portuguese",
        has: true
    },
    {
        id: 3,
        image: "images/Modules/Colors/ColorsPortuguese.png",
        title: 'Cores',
        likes: 1,
        language: "Portuguese",
        has: true
    },
    {
        id: 4,
        image: "images/Modules/Numbers/NumbersPortuguese.png",
        title: 'Números',
        likes: 2,
        language: "Portuguese",
        has: true
    },
    {
        id: 5,
        image: "images/Modules/Alphabet/AlphabetAmerican.png",
        title: 'Alfabeto',
        likes: 2,
        language: "American",
        has: false
    },
    {
        id: 6,
        image: "images/Modules/Alphabet/AlphabetBritish.png",
        title: 'Alfabeto',
        likes: 2,
        language: "British",
        has: false
    },
    {
        id: 7,
        image: "images/Modules/Alphabet/AlphabetAustralian.png",
        title: 'Alfabeto',
        likes: 2,
        language: "Australian",
        has: false
    },
    {
        id: 8,
        image: "images/Modules/Animals/AnimalsPortuguese.png",
        title: 'Animais',
        likes: 2,
        language: "Portuguese",
        has: false
    }, {
        id: 9,
        image: "images/Modules/Animals/AnimalsAmerican.png",
        title: 'Animais',
        likes: 2,
        language: "American",
        has: false
    }, {
        id: 10,
        image: "images/Modules/Animals/AnimalsBritish.png",
        title: 'Animais',
        likes: 2,
        language: "British",
        has: false
    }, {
        id: 11,
        image: "images/Modules/Animals/AnimalsAustralian.png",
        title: 'Animais',
        likes: 2,
        language: "Australian",
        has: false
    },
    {
        id: 12,
        image: "images/Modules/Calendar/CalendarAmerican.png",
        title: 'Calendário',
        likes: 2,
        language: "American",
        has: false
    },
    {
        id: 13,
        image: "images/Modules/Calendar/CalendarBritish.png",
        title: 'Calendário',
        likes: 2,
        language: "British",
        has: false
    },
    {
        id: 14,
        image: "images/Modules/Calendar/CalendarAustralian.png",
        title: 'Calendário',
        likes: 2,
        language: "Australian",
        has: false
    },
    {
        id: 15,
        image: "images/Modules/Colors/ColorsAmerican.png",
        title: 'Cores',
        likes: 2,
        language: "American",
        has: false
    },
    {
        id: 16,
        image: "images/Modules/Colors/ColorsBritish.png",
        title: 'Cores',
        likes: 2,
        language: "British",
        has: false
    },
    {
        id: 17,
        image: "images/Modules/Colors/ColorsAustralian.png",
        title: 'Cores',
        likes: 2,
        language: "Australian",
        has: false
    },
    {
        id: 18,
        image: "images/Modules/Emotions/EmotionsPortuguese.png",
        title: 'Emoções',
        likes: 2,
        language: "Portuguese",
        has: false
    },
    {
        id: 19,
        image: "images/Modules/Emotions/EmotionsAmerican.png",
        title: 'Emoções',
        likes: 2,
        language: "American",
        has: false
    },
    {
        id: 20,
        image: "images/Modules/Emotions/EmotionsBritish.png",
        title: 'Emoções',
        likes: 2,
        language: "British",
        has: false
    },
    {
        id: 21,
        image: "images/Modules/Emotions/EmotionsAustralian.png",
        title: 'Emoções',
        likes: 2,
        language: "Australian",
        has: false
    },
    {
        id: 22,
        image: "images/Modules/Numbers/NumbersAmerican.png",
        title: 'Números',
        likes: 2,
        language: "American",
        has: false
    },
    {
        id: 23,
        image: "images/Modules/Numbers/NumbersBritish.png",
        title: 'Números',
        likes: 2,
        language: "British",
        has: false
    },
    {
        id: 24,
        image: "images/Modules/Numbers/NumbersAustralian.png",
        title: 'Números',
        likes: 2,
        language: "Australian",
        has: false
    },
];

const courseInfo = [
    {
        id: 1,
        title: 'Cores (LGP)',
        first: "Cores I: Cores básicas",
        second: 'Cores I: Cores básicas',
        third: "Tonalidades",
        fourth: "Frases relacionadas",
        fifth: "Entre outros",
        sixth: "..."
    },
    {
        id: 2,
        title: 'Cores (ASL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 3,
        title: 'Cores (BSL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 4,
        title: 'Cores (AUSLAN)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 5,
        title: 'Emoções (LGP)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 6,
        title: 'Emoções (ASL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 7,
        title: 'Emoções (BSL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 8,
        title: 'Emoções (AUSLAN)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 9,
        title: 'Calendário (LGP)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 10,
        title: 'Calendário (ASL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 11,
        title: 'Calendário (BSL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 12,
        title: 'Calendário (AUSLAN)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 13,
        title: 'Alfabeto (LGP)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 14,
        title: 'Alfabeto (ASL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 15,
        title: 'Alfabeto (BSL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 16,
        title: 'Alfabeto (AUSLAN)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 17,
        title: 'Números (LGP)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 18,
        title: 'Números (ASL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 19,
        title: 'Números (BSL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 20,
        title: 'Números (AUSLAN)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 21,
        title: 'Animais (LGP)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 22,
        title: 'Animais (ASL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 23,
        title: 'Animais (BSL)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }, {
        id: 24,
        title: 'Animais (AUSLAN)',
        first: "images/Modules/Colors/ColorsPortuguese.png",
        second: 'Cores (LGP)',
        third: 1,
        fourth: "Portuguese",
        fifth: "9,99",
        sixth: "ola"
    }

];

ReactDOM.render(
    courses.map(course => {
        return e(coursesList, course)
    }), document.getElementById('courses-catalog'));

$('.fas.fa-heart').on('click', unlike);
$('.far.fa-heart').on('click', like);
$('.btn-buy').on('click', buy);

$('.figure').click(function () {
    $('.btn > img').attr('src', $(this).children('img').attr('src'));
    $('#learningLanguageModal').modal('hide');
    let language = $(this).children('img').attr('src').substring(13).split(" ")[0];
    ReactDOM.render(
        courses.filter(course => course.language === language).map(course => {
            return e(coursesList, course)
        }), document.getElementById('courses-catalog'));

    $('.fas.fa-heart').on('click', unlike);
    $('.far.fa-heart').on('click', like);
    $('.btn-buy').on('click', buy);
});

/*
sets the element with class far, fa-heart visible
and hides the clicked element
also, it decrements the number in the span element by 1
 */
function unlike() {
    $(this).siblings('.far.fa-heart').removeClass('d-none');
    $(this).addClass('d-none');
    let num = $(this).siblings('span').text();
    $(this).siblings('span').text(+num - 1);
}

/*
sets the element with class fas, fa-heart visible
and hides the clicked element
also, it increments the number in the span element by 1
 */
function like() {
    $(this).siblings('.fas.fa-heart').removeClass('d-none');
    $(this).addClass('d-none');
    let num = $(this).siblings('span').text();
    $(this).siblings('span').text(+num + 1);
}


function buy() {
    $('#priceModal').modal('toggle');
    let image = $(this).parent().parent().parent().siblings('.col-5').children('a').children().attr('src');
    let title = $(this).parent().siblings('a').children().text();
    let price = courses.filter(course => course.title === title)[0].price;
    $('#priceModal img').attr('src', image);
    $('#priceModal .modal-title').text(title);
    $('#priceModal .modal-footer span').text(price);
    ReactDOM.render(
        e(modalBody, courseInfo.filter(info => info.title === title)[0]
        ), document.getElementById('price-modal-body'));
}

/*
Add the package the user wants to buy to the shopping cart
increments the cart counter by 1
TODO add info to a real list with all the products the user wants to buy
 */
$('.modal-footer .btn').click(function () {
    let counter = $('.cart-counter').text();
    $('.cart-counter').text(+counter.substring(1) + 1);
});
