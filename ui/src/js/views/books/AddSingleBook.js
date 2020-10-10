import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../../assets/styles/addSingleBook.css'
import ShowNotAvailable from '../partials/ShowNotAvailable'

export default class AddSingleBook extends React.Component {
    render() {
        return (
            <div className="row content">
                <div className="col-md-3 col-sm-2 col-xs-2"></div>
                <div className="col-md-6 col-sm-8 col-xs-8">
                    <form action="/books/getInfo" method="get" className="form-horizontal">
                        <div className="form-group" id="isbn-single-book">
                            <label className="col-sm-8" id="isbn-label">
                                ISBN (Numbers only)
                </label>
                            <div className="col-sm-12">
                                <input name="isbn" type="text" id="isbn" className="form-control text-input-box" placeholder="ISBN (i.e 1234567890)" />
                            </div>
                        </div>

                        <p id="error-msg">Invalid ISBN: <ShowNotAvailable /></p>
                        <div className="form-group">
                            <label className="col-sm-8" id="num-of-copies-label">
                                No. of copies
                </label>
                            <div className="col-sm-12">
                                <div className="input-group">
                                    <input name="numOfCopy" id="num-of-copies" type="text" className="form-control text-input-box" placeholder="Number of copies (i.e 1)" />
                                    <div className="input-group-btn">
                                        <button id="up" className="btn btn-default text-input-box" type="button">
                                            <i className="glyphicon glyphicon-chevron-up"></i>
                                        </button>
                                        <button id="down" className="btn btn-default text-input-box" type="button">
                                            <i className="glyphicon glyphicon-chevron-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-3 col-xs-offset-4 col-sm-6 col-xs-6">
                                <button id="submit" type="submit" className="btn btn-block text-input-box button-grey" disabled>
                                    Next
                    </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-2">
                </div>
            </div>
        )
    }
}