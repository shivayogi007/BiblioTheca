import React from 'react';
import VerifyEachBook from '../title/VerifyEachBook'
// import '../../../assets/styles/verifyBook.css'
export default class VerifyBulk extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-11 container">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-danger">if error show this Invalid format, header should be in (isbn,numOfCopy)
                            format
        </li>
                    </ul>
                </div>

                <div className="col-md-11 container">
                    <ul className="list-group">
                        if book not found show this
        <input type="text" name="fileData" value="10" hidden readOnly />
                        <li className="list-group-item list-group-item-danger">Unable to find <b>number of books</b> ISBN(s). download CSV from
                <a id="download-not-found-books" role="button">here</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-11 h4 text-muted">
                    if found the books show this
        <h4>Result showing for <b>number of books found</b>ISBN(s).</h4>
                    <br /><label htmlFor="add-all"><i>Add all</i></label>
                    <input type="checkbox" className="add-book-checkbox" name="is-all-checked" id="add-all" autoComplete="off" />
                </div>

                <form action="/books/verify" method="post">
                    <VerifyEachBook />
                    <div className="col-md-12">
                        <input className="btn button-grey" type="submit" value="Submit" id="submit-all" />
                    </div>
                </form>
            </>
        )
    }
}