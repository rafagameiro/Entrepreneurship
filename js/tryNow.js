const e = React.createElement;

class coursesList extends React.Component {
    constructor(props) {
        super(props);
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
                            )
                        )
                    )
                )
            )
        );
    }
}

const courses = [
    {
        id: 1,
        image: "images/Modules/Colors/ColorsPortuguese.png",
        title: 'Cores (LGP)',
        language: "Portuguese"
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

ReactDOM.render(
    courses.map(course => {
        return e(coursesList, course)
    }), document.getElementById('courses-catalog'));


$('.figure').click(function () {
    $('.btn > img').attr('src', $(this).children('img').attr('src'));
    $('#learningLanguageModal').modal('hide');
    let language = $(this).children('img').attr('src').substring(13).split(" ")[0];
    ReactDOM.render(
        courses.filter(course => course.language === language).map(course => {
            return e(coursesList, course)
        }), document.getElementById('courses-catalog'));

});

$('#signModal').on("hide.bs.modal", function () {
    $('#login-email').val("");
    $('#login-pwd').val("");
    $('.invalid-email').css('visibility', 'hidden');
    $('#login-error').css('visibility', 'hidden');
});

const accountEmail = "admin@gmail.com";
const accountPwd = "admin123";

$('#btn-login').click(function () {
    $('.invalid-email').css('visibility', 'hidden');
    $('#login-error').css('visibility', 'hidden');

    let email = $('#login-email').val();
    let pwd = $('#login-pwd').val();

    if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === -1) {
        $('.invalid-email').css('visibility', 'visible');
        return false;
    }
    if (email !== accountEmail) {
        $('#login-error').css('visibility', 'visible');
        return false;
    }

    if (pwd !== accountPwd) {
        $('#login-error').css('visibility', 'visible');
        return false;
    }

    location.replace("courses.html");
});

$('#new-user').on("hide.bs.modal", function () {
    $('#register-email').val("");
    $('#register-pwd').val("");
    $('#pwd-confirm').val("");
    $('#user-name').val("");
    $('#username').val("");
    $('#status').val("");
    $('.invalid-email').css('visibility', 'hidden');
    $('#pwd-error').css('visibility', 'hidden');
});

$('#pwd-confirm').keyup(function () {
    console.log($('#register-pwd').val() + " " +  $('#pwd-confirm').val());
    if ($('#register-pwd').val() !== $('#pwd-confirm').val())
        $('#pwd-error').css('visibility', 'visible');
    else
        $('#pwd-error').css('visibility', 'hidden');
});

$('#btn-register').click(function () {
    $('.invalid-email').css('visibility', 'hidden');

    let email = $('#register-email').val();
    let name = $('#user-name').val();
    let username = $('#username').val();
    let status = $('#status').val();
    let pwd = $('#register-pwd').val();

    if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === -1) {
        $('.invalid-email').css('visibility', 'visible');
        return false;
    }

    //TODO make request to server to check if username is unique and then create the user account

    location.replace("courses.html");
});

/*
After selecting a file, it will save its name into the variable filename
 */
function getFileData(myFile) {
    let file = myFile.files[0];
    filename = file.name;
}

// activates the event listener of the element with the id "imageInput"
function chooseFile() {
    document.getElementById("imageInput").click();
}

/*
Loads a new file, selected by the user and presents it
 */
function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            $('#photo-preview').attr('src', e.target.result);
            $('#photo-preview').hide();
            $('#photo-preview').fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);
    }
}