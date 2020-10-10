import React from 'react';
// import '../../../assets/styles/allBooks.css';
// import '../../../assets/styles/searchBook.css';
// import '../../../assets/styles/importer.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import TitleListView from "./TitleListView";

export default class Search extends React.Component {
    toggleCheckbox() { }
    verifySearchText() { }
    render() {
        return (
            <>
                <div className="search-box" id="adv-search">
                    <form action="/books/search" method="get" id="search-title-form" onSubmit={this.verifySearchText}>
                        <input type="text" className="form-control" id="search-bar" placeholder="Search book by title, author, publisher"
                            name="searchText" defaultValue="search text here" autoFocus="autofocus" onFocus={() => { }} />
                        <button type="submit" className="btn btn-primary" id="search-title-btn">
                            <span className="glyphicon glyphicon-search" id="search-icon" aria-hidden="true" />
                        </button>
                    </form>
                    <div className="checkbox-container">
                        <input type="checkbox" name="tag-number" id="search-by-tag-number" onChange={this.toggleCheckbox} />
                        <label htmlFor="search-by-tag-number">Search by book id. </label>
                    </div>
                </div>
                < div className="col-md-12 col-sm-12 col-xs-12" >
                    <hr id="hr-line" />
                    {/* when books are availabel show this  */}
                    <h3 id="title-bucket">Showing 2 book(s) with matching : 'search text'</h3>
                </div><TitleListView />
                <h3>No search results found for 'searchText'</h3>
            </>
        )
    }
}