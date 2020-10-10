import React from 'react';
import '../../../assets/styles/bookDetails.css'
import BookCopy from './BookCopy'
export default class RecentlyAddedBooks extends React.Component {
    render() {
        return (
            <div className="row recently-added">
                <div className="col-md-1">
                </div>
                <div className="col-md-10 background-white">
                    <h1 className="text-center">Added Books</h1>
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
                <div className="col-md-1">
                </div>
            </div>
        )
    }
}
