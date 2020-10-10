import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class MyBook extends React.Component {
    render() {
        return (
            <div class="col-md-8 col-sm-8 col-xs-8 col-md-offset-2 col-sm-offset-2 col-xs-offset-2" id="book-container">
                <div class="row">
                    <div class="col-md-3">
                        <img src="/books/fetchImage?isbn=<%= title.isbn %>"
                            alt=":( Sorry Book Image Not Available"
                            class="media-object book-image"
                            onerror="this.onerror=null; this.src='/images/bookDefault.svg'" />
                    </div>
                    <div class="col-md-6">
                        <div class="h3 one-line-truncated">Title of book</div>

                        <div class="h5 one-line-truncated text-muted">
                            Book Id : book id
            </div>

                        <div class="h5 one-line-truncated text-muted">
                            Borrowed Date : some date
            </div>
                        <button class="btn button-grey button-return"
                            onclick='Library.returnConfirmation("<%= title.id %>", "<%= title.title %>")'>Return
            </button>
                    </div>
                </div>
            </div>
        )
    }
}