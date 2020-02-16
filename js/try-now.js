const e = React.createElement;

class coursesList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLock() {
        if (!this.props.available)
            return e(
                'div',
                {className: "container-fluid p-0"},
                e(
                    'span',
                    {className: "m-0 p-0", style: {position: "absolute", top: "7%", right: "-5%", zIndex: "1"}},
                    e(
                        'i',
                        {className: "fas fa-lock", style: {fontSize: "2.5em", color: "#2851a3"}}
                    )
                ),
                e(
                    'img',
                    {
                        src: this.props.image,
                        className: "card-img",
                        style: {cursor: "pointer"}
                    }
                )
            );
        else
            return e(
                'img',
                {
                    src: this.props.image,
                    className: "card-img",
                    style: {cursor: "pointer"}
                }
            );

    }

    renderStars() {
        let stars = this.props.stars;
        let difficulty = [];
        for (let i = 0; i < 3; i++, stars--)
            if (stars > 0)
                difficulty.push(
                    e(
                        'i',
                        {className: "fas fa-star", style: {color: "rgb(224,206,39)"}}
                    ));
            else
                difficulty.push(
                    e(
                        'i',
                        {className: "far fa-star", style: {color: "rgb(224,206,39)"}}
                    ));

        return difficulty;
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
                            {href: "course-try-now.html", style: {textDecoration: "none"}},
                           this.renderLock()
                        )
                    ), e(
                        'div',
                        {className: "col-7"},
                        e(
                            'div',
                            {className: "card-body m-0 h-100"},
                            e(
                                'a',
                                {href: "course-try-now.html", style: {textDecoration: "none"}},
                                e(
                                    'h5',
                                    {className: "card-title mt-2", style: {cursor: "pointer"}},
                                    this.props.title
                                )
                            ),
                            e(
                                'div',
                                {className: "container-fluid m-0 mt-1 mb-2 p-0", style: {letterSpacing: "10px"}},
                                this.renderStars()
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
        image: "../images/Modules/Alphabet/AlphabetPortuguese.png",
        title: 'Alfabeto',
        language: "Portuguese",
        stars: 1,
        kids: false,
        available: true
    },
    {
        id: 2,
        image: "../images/Modules/Calendar/CalendarPortuguese.png",
        title: 'Calendário',
        language: "Portuguese",
        stars: 1,
        kids: false,
        available: true
    },
    {
        id: 3,
        image: "../images/Modules/Colors/ColorsPortuguese.png",
        title: 'Cores',
        language: "Portuguese",
        stars: 1,
        kids: false,
        available: true
    },
    {
        id: 4,
        image: "../images/Modules/Numbers/NumbersPortuguese.png",
        title: 'Números',
        language: "Portuguese",
        stars: 1,
        kids: false,
        available: true
    },
    {
        id: 5,
        image: "../images/Modules/Alphabet/AlphabetAmerican.png",
        title: 'Alfabeto',
        language: "American",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 6,
        image: "../images/Modules/Alphabet/AlphabetBritish.png",
        title: 'Alfabeto',
        language: "British",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 7,
        image: "../images/Modules/Alphabet/AlphabetAustralian.png",
        title: 'Alfabeto',
        language: "Australian",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 8,
        image: "../images/Modules/Animals/AnimalsPortuguese.png",
        title: 'Animais',
        language: "Portuguese",
        stars: 2,
        kids: false,
        available: false
    }, {
        id: 9,
        image: "../images/Modules/Animals/AnimalsAmerican.png",
        title: 'Animais',
        language: "American",
        stars: 2,
        kids: false,
        available: false
    }, {
        id: 10,
        image: "../images/Modules/Animals/AnimalsBritish.png",
        title: 'Animais',
        language: "British",
        stars: 2,
        kids: false,
        available: false
    }, {
        id: 11,
        image: "../images/Modules/Animals/AnimalsAustralian.png",
        title: 'Animais',
        language: "Australian",
        stars: 2,
        kids: false,
        available: false
    },
    {
        id: 12,
        image: "../images/Modules/Calendar/CalendarAmerican.png",
        title: 'Calendário',
        language: "American",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 13,
        image: "../images/Modules/Calendar/CalendarBritish.png",
        title: 'Calendário',
        language: "British",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 14,
        image: "../images/Modules/Calendar/CalendarAustralian.png",
        title: 'Calendário',
        language: "Australian",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 15,
        image: "../images/Modules/Colors/ColorsAmerican.png",
        title: 'Cores',
        language: "American",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 16,
        image: "../images/Modules/Colors/ColorsBritish.png",
        title: 'Cores',
        language: "British",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 17,
        image: "../images/Modules/Colors/ColorsAustralian.png",
        title: 'Cores',
        language: "Australian",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 18,
        image: "../images/Modules/Emotions/EmotionsPortuguese.png",
        title: 'Emoções',
        language: "Portuguese",
        stars: 2,
        kids: false,
        available: false
    },
    {
        id: 19,
        image: "../images/Modules/Emotions/EmotionsAmerican.png",
        title: 'Emoções',
        language: "American",
        stars: 2,
        kids: false,
        available: false
    },
    {
        id: 20,
        image: "../images/Modules/Emotions/EmotionsBritish.png",
        title: 'Emoções',
        language: "British",
        stars: 2,
        kids: false,
        available: false
    },
    {
        id: 21,
        image: "../images/Modules/Emotions/EmotionsAustralian.png",
        title: 'Emoções',
        language: "Australian",
        stars: 2,
        kids: false,
        available: false
    },
    {
        id: 22,
        image: "../images/Modules/Numbers/NumbersAmerican.png",
        title: 'Números',
        language: "American",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 23,
        image: "../images/Modules/Numbers/NumbersBritish.png",
        title: 'Números',
        language: "British",
        stars: 1,
        kids: false,
        available: false
    },
    {
        id: 24,
        image: "../images/Modules/Numbers/NumbersAustralian.png",
        title: 'Números',
        language: "Australian",
        stars: 1,
        kids: false,
        available: false
    },
];

let coursesFilter = courses;
let usedFilters = [false, false, false];

listCourses(courses);

/**
 * Lists all objects courses inside the array list
 *
 * @param list list of courses
 */
function listCourses(list) {
    ReactDOM.render(
        list.map(course => {
            return e(coursesList, course)
        }), document.getElementById('courses-catalog'));
}

/**
 * Selects a flag inside the modal and based on that flag it will list the courses
 */
$('.figure').click(function () {
    $('.btn > img').attr('src', $(this).children('img').attr('src'));
    $('#learningLanguageModal').modal('hide');
    let language = $(this).children('img').attr('src').substring(16).split(" ")[0];

    clearFilter(0);
    if (language !== "None") {
        coursesFilter = coursesFilter.filter(course => course.language === language);
        listCourses(coursesFilter);
        usedFilters[0] = true;
    } else {
        listCourses(coursesFilter);
        usedFilters[0] = false;
    }
});

const MAX_DIFFICULTY = 3;

/**
 * Resets the difficulty filter
 */
$('#difficulty-filter span').click(function () {
    $('.difficulty-setter').addClass('far');
    $('.difficulty-setter').removeClass('fas');
    $('#difficulty-filter').css('background-color', '#1566db');

    clearFilter(1);
    listCourses(coursesFilter);
    usedFilters[1] = false;
});

/**
 * Based on the clicked star, it will filter the courses through difficulty
 */
$('.difficulty-setter').click(function () {
    let difficulty = $(this).attr('id').substring(5);
    for (let i = 0; i < MAX_DIFFICULTY; i++) {
        if (i < difficulty) {
            $('#star-' + (i + 1)).removeClass('far');
            $('#star-' + (i + 1)).addClass('fas');
        } else {
            $('#star-' + (i + 1)).addClass('far');
            $('#star-' + (i + 1)).removeClass('fas');
        }
    }

    if ($('#difficulty-filter').css('background-color') === "rgb(59, 153, 122)")
        clearFilter(1);

    coursesFilter = coursesFilter.filter(course => course.stars === +difficulty);

    listCourses(coursesFilter);
    usedFilters[1] = true;
    $('#difficulty-filter').css('background-color', '#3b997a');

});

/**
 * Filters the courses to get ones that are specific for kids,
 * and lists those courses
 */
$('#kids-filter').click(function () {
    $(this).toggleClass('active');
    let hasClass = $(this).hasClass('active');

    if (hasClass) {

        coursesFilter = coursesFilter.filter(course => {
            return hasClass ? course.kids : course;
        });

        listCourses(coursesFilter);
        usedFilters[2] = true;

        $('#kids-filter').css('background-color', '#3b997a');
    } else {

        clearFilter(2);
        listCourses(coursesFilter);
        usedFilters[2] = false;
        $('#kids-filter').css('background-color', '#1566db');
    }
});

/**
 * It goes through the usedFilters array and for each that is in use, reapplies the filter
 *
 * @param pos position in the array that corresponds to a filter
 * That filter won't be applied again
 */
function clearFilter(pos) {
    coursesFilter = courses;
    for (let i = 0; i < usedFilters.length; i++) {
        if (usedFilters[i] && i !== pos)
            filter(i);
    }
}

/**
 * Given a number from 0 to 4, it will apply one of the available filters to the courses
 * inside the courseFilter array
 *
 * @param pos position in the array usedFilters
 */
function filter(pos) {
    let hasClass = false;
    switch (pos) {
        case 0:
            let language = $('#language-filter img').attr('src').substring(16).split(" ")[0];

            coursesFilter = coursesFilter.filter(course => course.language === language);
            break;
        case 1:
            let difficulty = 0;
            difficulty = $('#star-1').hasClass('fas') ? ++difficulty : difficulty;
            difficulty = $('#star-2').hasClass('fas') ? ++difficulty : difficulty;
            difficulty = $('#star-3').hasClass('fas') ? ++difficulty : difficulty;

            coursesFilter = coursesFilter.filter(course => course.stars === difficulty);
            break;
        case 2:
            hasClass = $('#kids-filter').hasClass('active');

            coursesFilter = coursesFilter.filter(course => {
                return hasClass ? course.kids : course;
            });
            break;
    }
}


/**
 * After closing the modal it will reset all changes that were done
 */
$('#signModal').on("hide.bs.modal", function () {
    $('#login-email').val("");
    $('#login-pwd').val("");
    $('.invalid-email').css('visibility', 'hidden');
    $('#login-error').css('visibility', 'hidden');
});

const accountEmail = "admin@gmail.com";
const accountPwd = "admin123";

/**
 * Logs in user:
 * Checks if the email address was correctly typed and if not throws an error message,
 * after that checks if the password and email address correspond to the correct one
 * If they don't match an error message is shown, and if it not the user is logged in
 */
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

/**
 * After closing the modal it will reset all changes that were done
 */
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

/**
 * Checks if the typed password in the "password" field is the same as the "Verify password" field
 */
$('#pwd-confirm').keyup(function () {
    if ($('#register-pwd').val() !== $('#pwd-confirm').val())
        $('#pwd-error').css('visibility', 'visible');
    else
        $('#pwd-error').css('visibility', 'hidden');
});

/**
 * Register user:
 * Checks if the email address was correctly typed and if not throws an error message,
 * after that checks if the username is unique, and if it is creates a new account with
 * the typed information
 */
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