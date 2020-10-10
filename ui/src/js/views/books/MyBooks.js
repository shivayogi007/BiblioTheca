import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../../assets/styles/allBooks.css'
export default class MyBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = { books: 1 }
    }
    render() {
        const noBooksAvailable = <div className="return-my-books col-md-10 col-sm-12 col-xs-12 col-md-offset-1 font-xl background-white one-line-truncated">
            You don't have any borrowed books.</div>;
        return this.state.books <= 1 ? noBooksAvailable : <MyBook />
    }
}