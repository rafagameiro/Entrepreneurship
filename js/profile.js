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
                                    {className: "card-title mt-2 mb-5", style: {cursor: "pointer"}},
                                    this.props.title
                                )
                            ),
                            e(
                                'div',
                                {className: "container-fluid m-0 p-0 pt-5"},
                                e(
                                    'div',
                                    {
                                        className: "progress w-100"
                                    },
                                    e(
                                        'div',
                                        {
                                            className: "progress-bar progress-bar-striped",
                                            style: {width: this.props.progress}
                                        }
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

class achievementsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            'div',
            {className: 'col-6 col-md-4 col-lg-2 text-center'},
            e(
                'div',
                {className: "container-fluid m-0 p-0"},
                e(
                    'div',
                    {className: "container p-0 mt-5 mb-1 achievement-medal"},
                    e(
                        'img',
                        {src: this.props.image, className: "rounded-circle"}
                    )
                ),
                e(
                    'span',
                    null,
                    this.props.title
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
        progress: "90%"
    },
    {
        id: 2,
        image: "images/Modules/Emotions/EmotionsPortuguese.png",
        title: 'Emoções (LGP)',
        progress: "50%"
    },
    {
        id: 3,
        image: "images/Modules/Calendar/CalendarPortuguese.png",
        title: 'Calendário (LGP)',
        progress: "10%"
    },
    {
        id: 4,
        image: "images/Modules/Alphabet/AlphabetPortuguese.png",
        title: 'Alfabeto (LGP)',
        progress: "70%"
    },
    {
        id: 5,
        image: "images/Modules/Numbers/NumbersPortuguese.png",
        title: 'Números (LGP)',
        progress: "60%"
    },
    {
        id: 6,
        image: "images/Modules/Animals/AnimalsPortuguese.png",
        title: 'Animais (LGP)',
        progress: "0%"
    }
];

const achievements = [
    {
        id: 1,
        image: "images/4vbLXq8.jpg",
        title: 'Achievement 1'
    },
    {
        id: 2,
        image: "images/4vbLXq8.jpg",
        title: 'Achievement 2'
    },
    {
        id: 3,
        image: "images/4vbLXq8.jpg",
        title: 'Achievement 3'
    },
    {
        id: 4,
        image: "images/4vbLXq8.jpg",
        title: 'Achievement 4'
    },
    {
        id: 5,
        image: "images/4vbLXq8.jpg",
        title: 'Achievement 5'
    },
    {
        id: 6,
        image: "images/4vbLXq8.jpg",
        title: 'Achievement 6'
    },
    {
        id: 7,
        image: "images/4vbLXq8.jpg",
        title: 'Achievement 7'
    },
    {
        id: 8,
        image: "images/4vbLXq8.jpg",
        title: 'Achievement 8'
    },
    {
        id: 9,
        image: "images/4vbLXq8.jpg",
        title: 'Achievement 9'
    }
];

ReactDOM.render(
    courses.map(course => {
        return e(coursesList, course)
    }), document.getElementById('profile-courses')
);

ReactDOM.render(
    achievements.map(achievement => {
        return e(achievementsList, achievement)
    }), document.getElementById('achievements-list')
);

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

