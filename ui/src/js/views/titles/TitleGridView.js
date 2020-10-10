import React from 'react';
import defaultBook from '../../../assets/images/bookDefault.svg'
import greenCircle from '../../../assets/images/greenCircle.svg'
import redCircle from '../../../assets/images/redCircle.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../../assets/styles/allBooks.css';
// import '../../../assets/styles/importer.css'
export default class TitleGridView extends React.Component {
    render() {
        return (<a href='/books/details?titleId=<%= title.id %>' className="black-link" >
            <div className="col-md-3 col-sm-4 col-xs-8 col-md-offset-0 col-sm-offset-0 col-xs-offset-2">
                <div className="media well">
                    <img alt=":( Sorry Book Not Available" src={defaultBook} className="media-object book-image" />
                    <div className="media-body">
                        <div className="media-heading book-title one-line-truncated" id="book-title">Book Title</div>
                        <div className="media-heading one-line-truncated book-author" id="book-author">
                            Author of the book or Author not available
                </div>
                        if available then green
                <div className="color-green availability"><img alt="available" src={greenCircle} /> Available </div>
                        <div className="color-red availability"> <img alt="notAvailable" src={redCircle} /> Not Available </div>
                    </div>
                </div>
            </div>
        </a>
        )
    }
}