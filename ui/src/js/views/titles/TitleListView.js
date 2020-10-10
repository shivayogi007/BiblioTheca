import React from 'react';
import defaultBook from '../../../assets/images/bookDefault.svg'
import greenCircle from '../../../assets/images/greenCircle.svg'
import redCircle from '../../../assets/images/redCircle.svg'
// import '../../../assets/styles/allBooks.css'
export default class TitleListView extends React.Component {
    render() {
        return (<a href='/books/details?titleId=<%= title.id %>' className="black-link">
            <div className="col-md-8 col-sm-8 col-xs-8 col-md-offset-2 col-sm-offset-2 col-xs-offset-2" id="book-container">
                <div className="row">
                    <div className="col-md-3">
                        <img alt={":( Sorry Book Not Available"} src={defaultBook} className="media-object book-image" />
                    </div>
                    <div className="col-md-9">
                        <div className="h3 one-line-truncated">Book Title</div>
                        <div className="h5 one-line-truncated text-muted">
                            Author: Author name or  Author not available
                </div>
                        <div className="h5 one-line-truncated text-muted">
                            Publisher: Publisher name or Publisher not available
                </div>
                        <div className="color-green availability"><img src={greenCircle} alt="available" /> Available</div>
                        <div className="color-red availability">
                            <img src={redCircle} alt="notAvailable" /> Not Available
                </div>
                        <h4><span className="label label-warning read-label">Already Read</span></h4>
                    </div>
                </div>
            </div>
        </a>
        )
    }
}