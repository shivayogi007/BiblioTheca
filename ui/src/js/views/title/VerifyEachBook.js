import React from 'react';
import bookDefault from '../../../assets/images/bookDefault.svg'
// import '../../../assets/styles/verifyBook.css';
export default class VerifyEachBook extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-5" id="book-container">
                    <div className="col-md-2">
                        <div className="add-checkbox">
                            <input type="hidden" name="<%= index %>" value="<%= JSON.stringify(title) %>" />
                            <input type="checkbox" className="add-book-checkbox" name="<%= index %>"
                                id="fancy-checkbox-info-<%- index %>" autoComplete="off" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img alt=":( Sorry Book Image Not Available"
                                src={bookDefault}
                                className="media-object book-image"
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <div className="media-body">
                                <div className="h5 one-line-truncated text-muted">
                                    <b>Title: </b> Book  Title
                </div>
                                <div className="h5 one-line-truncated text-muted">
                                    <b>Author:</b> Author or Author not available
                </div>
                                <div className="h5 one-line-truncated text-muted">
                                    <b>Publisher: </b> Book Publisher or Publisher not available
                </div>
                                <div className="h5 one-line-truncated text-muted">
                                    <b>ISBN:</b> Book isbn or ISBN not available
                </div>
                                <div className="h5 one-line-truncated text-muted">
                                    <b>Number of copy:</b> Number of copies or numOfCopy not available
                </div>
                                <div className="h5 one-line-truncated text-muted">
                                    <b>Pages:</b> Number of pages or pages not available
                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </>

        )
    }
}