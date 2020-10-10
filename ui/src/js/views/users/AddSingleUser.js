import React from 'react';
// import '../../../assets/styles/importer.css'
// import '../../../assets/styles/addUser.css'

export default class AddSingleUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isEnabled: false }
    }

    enableAddButton() {
        this.setState({ isEnabled: true })
    }
    addSingleUser() { }
    render() {
        return (<div className="row add-single-user">
            <div className="col-md-3 col-sm-2 col-xs-1"></div>
            <div className="col-md-6 col-sm-8 col-xs-10">
                <div className="form-horizontal">
                    <div className="form-group" id="email-box">
                        <label className="col-sm-8" id="text-label">
                            Enter email
                </label>
                        <div className="col-sm-12">
                            <input name="email" type="text" id="email" className="form-control text-input-box"
                                placeholder="e.g. example@thoughtworks.com" />
                        </div>
                    </div>
                    <p className="error-msg" id="mail-error-msg"></p>
                    <div className="form-group">
                        <label className="col-sm-8" id="text-label">
                            Select Role
                </label>
                        <div className="col-sm-12">
                            <div className="input-group">
                                <label className="checkbox-inline role-selection"><input type="checkbox" id="admin-role" onClick={() => this.enableAddButton()} />Admin</label>
                                <label className="checkbox-inline role-selection"><input type="checkbox" id="librarian-role" onClick={() => this.enableAddButton()} />Librarian</label>
                                <label className="checkbox-inline role-selection"><input type="checkbox" id="borrower-role" onClick={() => this.enableAddButton()} />Borrower</label>
                            </div>
                        </div>
                    </div>
                    <p className="error-msg" id="role-error-msg"></p>
                    <div className="form-group">
                        <div className="col-sm-offset-3 col-xs-offset-4 col-sm-6 col-xs-6">
                            <button id="submit" className="btn btn-block text-input-box button-green" onClick={this.addSingleUser} disabled={this.state.isEnabled}>
                                Add
                    </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-2 col-xs-1"></div>
        </div>
        )
    }
}