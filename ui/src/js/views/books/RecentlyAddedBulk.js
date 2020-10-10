import React from 'react';
// import '../../../assets/styles/bookDetails.css'
import BookCopy from './BookCopy'
export default class RecentlyAddedBulk extends React.Component {
    render() {
        return (
            <div className="row book-details-container">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <div className="alert alert-success alert-dismissable">
                        <a className="close" data-dismiss="alert" aria-label="close">&times;</a>
                        You have added book copies to the library successfully with given tag numbers
        </div>
                    <h1 className="text-left header-with-border">Recently added</h1>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Series</th>
                                <th>Title</th>
                                <th>Tag number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <BookCopy />
                            <BookCopy />
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2">
                </div>
            </div>
        )
    }
}