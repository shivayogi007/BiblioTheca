import React from 'react';
import AddSingleBook from './AddSingleBook';
import BulkUploadBooks from './BulkUploadBooks';
import ManualAddBook from './ManualAddBook';
// import '../../../assets/styles/addBook.css'
// import '../../../assets/styles/tab.css'
export default class New extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: "add-book-isbn" }
    }

    changeTab(tabName) {
        this.setState({ activeTab: tabName })
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-1"></div>
                <div id="add-book" className="col-md-10">
                    <div className="tab">
                        <button
                            className={this.state.activeTab === "add-book-isbn" ? "tablinksActive" : "tablinks"}
                            onClick={() => this.changeTab('add-book-isbn')}
                            data-id="add-book-isbn"
                        >Add Book by ISBN
                    </button>
                        <button
                            className={this.state.activeTab === "add-multiple-book" ? "tablinksActive" : "tablinks"}
                            onClick={() => this.changeTab('add-multiple-book')}
                            data-id="add-multiple-book"
                        >Upload books by CSV
                    </button>
                        <button
                            className={this.state.activeTab === "add-book-manual" ? "tablinksActive" : "tablinks"}
                            onClick={() => this.changeTab('add-book-manual')}
                            data-id="add-book-manual"
                        >Add Book Manually
                    </button>
                    </div>

                    <div id="add-book-isbn"
                        className={this.state.activeTab === "add-book-isbn" ? "tabcontentenabled" : "tabcontentdisabled"}>
                        <AddSingleBook />
                    </div>
                    <div id="add-book-manual"
                        className={this.state.activeTab === "add-book-manual" ? "tabcontentenabled" : "tabcontentdisabled"}>
                        <ManualAddBook />
                    </div>

                    <div id="add-multiple-book"
                        className={this.state.activeTab === "add-multiple-book" ? "tabcontentenabled" : "tabcontentdisabled"}>
                        <BulkUploadBooks />
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}
