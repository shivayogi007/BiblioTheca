import React from 'react';
// import '../../../assets/styles/importer.css';
// import '../../../assets/styles/manualAddBook.css';
export default class UploadBorrowers extends React.Component {
    render() {
        return (
            < div className="row multiuser-container" >
                <div className="col-md-2 col-sm-2 col-xs-2"></div>
                <div className="col-md-6 col-sm-8 col-xs-8">
                    <form autoComplete="off" action="/users/bulkUpload" encType="multipart/form-data" method="post"
                        className="form-horizontal">
                        <div className="input-group">
                            <label className="input-group-btn">
                                <span className="multiple-book-inputs btn btn-primary">
                                    Browse&hellip; <input name="users_file" id="input-bulk-upload" type="file"
                                        style={{ display: "none" }} accept="text/csv" max="1" max-file-size="1000" />
                                </span>
                            </label>
                            <input id="file-name" type="text" className="multiple-user-inputs form-control" readOnly />
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-3 col-xs-offset-4 col-sm-6 col-xs-6">
                                <button name="submit" id="upload" type="submit"
                                    className="multiple-user-inputs btn btn-block button-grey" disabled>
                                    Next
                    </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-2">
                    <a href="/csvTemplates/emails.csv" download>
                        <button type="button" className="btn btn-default btn-sm multiple-user-inputs">
                            <span className="glyphicon glyphicon-download-alt"></span> Download template
            </button>
                    </a>
                </div>
            </div>
        )
    }
}