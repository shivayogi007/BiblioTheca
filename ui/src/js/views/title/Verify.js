import React from 'react';
import ShowNotAvailable from '../partials/ShowNotAvailable'
import bookDefault from '../../../assets/images/bookDefault.svg'
export default class Verify extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8 verify-book-detail">
                    <img alt="Bootstrap Image Preview" src={bookDefault} className="img-thumbnail col-md-4" />
                    <dl className="dl-horizontal col-md-8 book-info">
                        <dt>Book Name :</dt>
                        <dd>Title of book or<ShowNotAvailable /></dd>
                        <dt>Author :</dt>
                        <dd>Author of book or <dd></dd> <ShowNotAvailable />
                        </dd>
                        <dt>Publisher :</dt>
                        <dd>Publisher of book or <ShowNotAvailable /></dd>
                        <dt>Pages :</dt>
                        <dd>Pages of book or <ShowNotAvailable /></dd>
                        <dt>ISBN :</dt>
                        <dd>Book ISBN number</dd>
                        <dt>No. of copies :</dt>
                        <dd>Number of Book copies</dd>
                        <form action="/books/recentlyAdded" method="post">
                            <input type="hidden" value="<%= book.isbn %>" name="isbn" />
                            <input type="hidden" value="<%= book.numOfCopy %>" name="numOfCopy" />
                            <div className="col-md-1"></div>
                            <a href="/books/new" className="btn btn-default col-md-3 verify-book-btns button-grey"
                                role="button">Cancel</a>
                            <div className="col-md-1"></div>
                            <input type="submit" className="btn col-md-3 verify-book-btns button-grey" role="button"
                                value="Add" />
                        </form>
                    </dl>
                </div>
                <div className="col-md-2">
                </div>
            </div>
        )
    }
}