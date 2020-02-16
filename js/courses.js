const e = React.createElement;

class coursesList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLock() {
        if (!this.props.has)
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

    renderLike() {
        if (this.props.hasLike)
            return e(
                'div',
                {className: "container-fluid m-0 mt-4 mb-4 p-0", style: {letterSpacing: "10px"}},
                e(
                    'i',
                    {className: "fas fa-heart"}
                ),
                e(
                    'i',
                    {
                        className: "d-none far fa-heart"
                    }
                ),
                e(
                    'span',
                    null,
                    this.props.likes
                )
            );
        else
            return e(
                'div',
                {className: "container-fluid m-0 mt-4 mb-4 p-0", style: {letterSpacing: "10px"}},
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
            );
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
                        {className: "col-5 pb-1 pt-4"},
                        e(
                            'a',
                            {href: "course.html", style: {textDecoration: "none"}},
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
                                {href: "course.html", style: {textDecoration: "none"}},
                                e(
                                    'h5',
                                    {className: "card-title mt-2", style: {cursor: "pointer"}},
                                    this.props.title
                                )
                            ),
                            e(
                                'div',
                                {className: "container-fluid m-0 mt-1 mb-2 p-0", style: {letterSpacing: "10px"}},
                                this.renderStars(),
                                this.renderLike()
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
        likes: 3,
        hasLike: true,
        language: "Portuguese",
        stars: 1,
        kids: false,
        promotion: false,
        has: true
    },
    {
        id: 2,
        image: "../images/Modules/Calendar/CalendarPortuguese.png",
        title: 'Calendário',
        likes: 2,
        hasLike: false,
        language: "Portuguese",
        stars: 1,
        kids: false,
        promotion: false,
        has: true
    },
    {
        id: 3,
        image: "../images/Modules/Colors/ColorsPortuguese.png",
        title: 'Cores',
        likes: 1,
        hasLike: false,
        language: "Portuguese",
        stars: 1,
        kids: false,
        promotion: false,
        has: true
    },
    {
        id: 4,
        image: "../images/Modules/Numbers/NumbersPortuguese.png",
        title: 'Números',
        likes: 2,
        hasLike: false,
        language: "Portuguese",
        stars: 1,
        kids: false,
        promotion: false,
        has: true
    },
    {
        id: 5,
        image: "../images/Modules/Alphabet/AlphabetAmerican.png",
        title: 'Alfabeto',
        likes: 2,
        hasLike: false,
        language: "American",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 6,
        image: "../images/Modules/Alphabet/AlphabetBritish.png",
        title: 'Alfabeto',
        likes: 2,
        hasLike: false,
        language: "British",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 7,
        image: "../images/Modules/Alphabet/AlphabetAustralian.png",
        title: 'Alfabeto',
        likes: 2,
        hasLike: false,
        language: "Australian",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 8,
        image: "../images/Modules/Animals/AnimalsPortuguese.png",
        title: 'Animais',
        likes: 2,
        hasLike: false,
        language: "Portuguese",
        stars: 2,
        kids: false,
        promotion: false,
        has: false
    }, {
        id: 9,
        image: "../images/Modules/Animals/AnimalsAmerican.png",
        title: 'Animais',
        likes: 2,
        hasLike: false,
        language: "American",
        stars: 2,
        kids: false,
        promotion: false,
        has: false
    }, {
        id: 10,
        image: "../images/Modules/Animals/AnimalsBritish.png",
        title: 'Animais',
        likes: 2,
        hasLike: false,
        language: "British",
        stars: 2,
        kids: false,
        promotion: false,
        has: false
    }, {
        id: 11,
        image: "../images/Modules/Animals/AnimalsAustralian.png",
        title: 'Animais',
        likes: 2,
        hasLike: false,
        language: "Australian",
        stars: 2,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 12,
        image: "../images/Modules/Calendar/CalendarAmerican.png",
        title: 'Calendário',
        likes: 2,
        hasLike: false,
        language: "American",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 13,
        image: "../images/Modules/Calendar/CalendarBritish.png",
        title: 'Calendário',
        likes: 2,
        hasLike: false,
        language: "British",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 14,
        image: "../images/Modules/Calendar/CalendarAustralian.png",
        title: 'Calendário',
        likes: 2,
        hasLike: false,
        language: "Australian",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 15,
        image: "../images/Modules/Colors/ColorsAmerican.png",
        title: 'Cores',
        likes: 2,
        hasLike: false,
        language: "American",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 16,
        image: "../images/Modules/Colors/ColorsBritish.png",
        title: 'Cores',
        likes: 2,
        hasLike: false,
        language: "British",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 17,
        image: "../images/Modules/Colors/ColorsAustralian.png",
        title: 'Cores',
        likes: 2,
        hasLike: false,
        language: "Australian",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 18,
        image: "../images/Modules/Emotions/EmotionsPortuguese.png",
        title: 'Emoções',
        likes: 2,
        hasLike: false,
        language: "Portuguese",
        stars: 2,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 19,
        image: "../images/Modules/Emotions/EmotionsAmerican.png",
        title: 'Emoções',
        likes: 2,
        hasLike: false,
        language: "American",
        stars: 2,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 20,
        image: "../images/Modules/Emotions/EmotionsBritish.png",
        title: 'Emoções',
        likes: 2,
        hasLike: false,
        language: "British",
        stars: 2,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 21,
        image: "../images/Modules/Emotions/EmotionsAustralian.png",
        title: 'Emoções',
        likes: 2,
        hasLike: false,
        language: "Australian",
        stars: 2,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 22,
        image: "../images/Modules/Numbers/NumbersAmerican.png",
        title: 'Números',
        likes: 2,
        hasLike: false,
        language: "American",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 23,
        image: "../images/Modules/Numbers/NumbersBritish.png",
        title: 'Números',
        likes: 2,
        hasLike: false,
        language: "British",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
    {
        id: 24,
        image: "../images/Modules/Numbers/NumbersAustralian.png",
        title: 'Números',
        likes: 2,
        hasLike: false,
        language: "Australian",
        stars: 1,
        kids: false,
        promotion: false,
        has: false
    },
];

let coursesFilter = courses;
let usedFilters = [false, false, false, false, false];

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

    $('.fas.fa-heart').on('click', unlike);
    $('.far.fa-heart').on('click', like);
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
 * Filters the courses to get ones that haven't been bought
 * and lists those courses
 */
$('#can-buy-filter').click(function () {
    $(this).toggleClass('active');
    let hasClass = $(this).hasClass('active');

    if (hasClass) {

        coursesFilter = coursesFilter.filter(course => {
            return hasClass ? !course.has : course;
        });

        listCourses(coursesFilter);
        usedFilters[3] = true;

        $('#can-buy-filter').css('background-color', '#3b997a');
    } else {

        clearFilter(3);
        listCourses(coursesFilter);
        usedFilters[3] = false;
        $('#can-buy-filter').css('background-color', '#1566db');
    }
});

/**
 * Filters the courses to get ones that are on sale
 * and lists those courses
 */
$('#promotion-filter').click(function () {
    $(this).toggleClass('active');
    let hasClass = $(this).hasClass('active');

    if (hasClass) {

        coursesFilter = coursesFilter.filter(course => {
            return hasClass ? course.promotion : course;
        });

        listCourses(coursesFilter);
        usedFilters[4] = true;

        $('#promotion-filter').css('background-color', '#3b997a');
    } else {

        clearFilter(4);
        listCourses(coursesFilter);
        usedFilters[4] = false;
        $('#promotion-filter').css('background-color', '#1566db');
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
        case 3:
            hasClass = $('#can-buy-filter').hasClass('active');

            coursesFilter = coursesFilter.filter(course => {
                return hasClass ? !course.has : course;
            });
            break;
        case 4:
            hasClass = $('#promotion-filter').hasClass('active');

            coursesFilter = coursesFilter.filter(course => {
                return hasClass ? course.promotion : course;
            });
            break;
    }
}

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

    applyChange(this, "-");
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

    applyChange(this, '+');
}

/**
 * Goes through the courses array and searches for an object that has the same image as the one card
 * that triggered the event
 * After finding it, sets the count of likes and if the user added or removed the like
 *
 * @param obj object that triggered the event
 */
function applyChange(obj, opt) {
    let image = $(obj).parent().parent().parent().parent().siblings('.col-5').children('a').children().attr('src');
    if (image === undefined)
        image = $(obj).parent().parent().parent().parent().siblings('.col-5').children('a').children().children('img').attr('src');

    for (let i = 0; i < courses.length; i++)
        if (courses[i].image === image) {
            courses[i].likes = opt === '+' ? ++courses[i].likes : --courses[i].likes;
            courses.hasLike = !courses.hasLike;
        }
}
