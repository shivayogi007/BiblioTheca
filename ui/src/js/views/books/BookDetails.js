import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../../assets/styles/bookDetails.css';
import defaultBookImage from '../../../assets/images/bookDefault.svg'
import ShowNotAvailable from "../partials/ShowNotAvailable";
import BorrowOption from "./BorrowOption"

export default class BookDetails extends React.Component {
    render() {
        return (<><div className="row book-details-container">
            <div className="col-md-2 col-sm-2 col-xs-2 back-btn-container">
                <button className="back-btn" onclick="goBack()">&#10094;</button>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-8 book-details">
                <div className="header-with-border one-line-truncated font-xl">
                    <ShowNotAvailable /> or Book Title
        </div>
                <hr />
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="media">
                            <img alt="Sorry, image not available"
                                src={defaultBookImage} //fetch book image by isbn
                                className="media-object book-image"
                                onerror={defaultBookImage} />
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-md-12 col-sm-9 col-xs-9 col-md-offset-0 col-sm-offset-2 col-xs-offset-1 keys">
                                <ul>
                                    <li>
                                        <div className="row ">
                                            <div className="col-md-3 col-sm-3 col-xs-4 font-l">Author</div>
                                            <div className="col-md-8 col-sm-8 col-xs-7 font-m one-line-truncated">
                                                :
                                    <ShowNotAvailable /> or Book Author
                                    </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row ">
                                            <div className="col-md-3 col-sm-3 col-xs-4 font-l">Publisher</div>
                                            <div className="col-md-8 col-sm-8 col-xs-7 font-m one-line-truncated">
                                                :
                                        <ShowNotAvailable /> or Book Publisher
                                    </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row ">
                                            <div className="col-md-3 col-sm-3 col-xs-4 font-l">Pages</div>
                                            <div className="col-md-8 col-sm-8 col-xs-7 font-m one-line-truncated">
                                                :
                                        <ShowNotAvailable /> or Book Pages
                                    </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row ">
                                            <div className="col-md-3 col-sm-3 col-xs-4 font-l">ISBN</div>
                                            <div className="col-md-8 col-sm-8 col-xs-7 font-m">: Isbn No.</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1 col-xs-1"></div>
                    <div className="col-md-7 col-sm-10 col-xs-9 book-description">
                        <h4>Description</h4>
                        <p>book.description</p>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-3 view-more">
                        <a href="#" data-toggle="modal" data-target="#full-description">Read More</a>
                    </div>

                    <div className="col-md-7 col-sm-10 col-xs-9 book-description">
                        <h4>Description</h4>
                        <p>Description is not Available.</p>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2"></div>
                </div>
                <hr />
                <div className="row button-container">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        book.hasBorrowed
                <button onclick='Library.returnConfirmation("<%=book.id%>", "<%=book.title%>")'
                            className="btn button-grey">Return</button>
                        book.availableTagNumber.length || book.unavailableBooksWithBorrower.length
                <BorrowOption />
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2"></div>
        </div>
            <div>
                <div className="modal" id="full-description" role="dialog" tabindex="1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Description</h4>
                            </div>
                            <div className="modal-body">
                                <p>Book description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>)
    }
}