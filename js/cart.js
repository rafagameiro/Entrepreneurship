'use strict';

const e = React.createElement;

class cartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return e(
            'div',
            { className: 'row ml-0 mr-0 bg-white'},
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
                    {className: "btn-remove"},
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

const cart = [
    {id: 1, image:"images/Modules/Teste5.png", name: 'Hello World', price: '9,99'},
    {id: 2, image:"images/Modules/Teste5.png", name: 'Installation', price: '9,99'}
];

ReactDOM.render(
    cart.map( elem => {
        return e(cartList, elem)
    }), document.getElementById('shop-cart'));

