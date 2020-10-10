import React from 'react';
// import '../../../assets/styles/addUser.css'
// import '../../../assets/styles/tab.css'
import AddSingleUser from './AddSingleUser';
import UploadBorrowers from './UploadBorrowers';
import ManageUsers from './ManageUsers';
export default class Manage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "add-single-user",
            addUserError: false
        }
    }

    changeTab(tabName) {
        this.setState({ activeTab: tabName })
    }

    render() {
        return (<div className="row">
            <div className="col-md-1"></div>
            <div id="add-user" className="col-md-10">
                {
                    this.state.addUserError ?
                        <div className="alert alert-danger alert-dismissable">
                            <span className="close" data-dismiss="alert" aria-label="close">&times;</span>
                            Error Message goes here
                </div> : ""
                }
                {!this.state.addUserError ?
                    <div className="alert alert-success alert-dismissable">
                        <span className="close" data-dismiss="alert" aria-label="close">&times;</span>
                        Success Message goes here
                </div> : ""
                }
                <div className="tab">
                    <button
                        className={this.state.activeTab === "add-single-user" ? "tablinksActive" : "tablinks"}
                        onClick={() => this.changeTab('add-single-user')}
                        data-id="add-single-user"
                    >Add user
                    </button>
                    <button
                        className={this.state.activeTab === "add-multiple-users" ? "tablinksActive" : "tablinks"}
                        onClick={() => this.changeTab('add-multiple-users')}
                        data-id="add-multiple-users"
                    >Upload users by CSV
                    </button>
                    <button
                        className={this.state.activeTab === "manage-user" ? "tablinksActive" : "tablinks"}
                        onClick={() => this.changeTab('manage-user')}
                        data-id="manage-user"
                    >Manage users
                    </button>
                </div>
                <div id="add-single-user"
                    className={this.state.activeTab === "add-single-user" ? "tabcontentenabled" : "tabcontentdisabled"}>
                    <AddSingleUser />
                </div>
                <div id="add-multiple-users"
                    className={this.state.activeTab === "add-multiple-users" ? "tabcontentenabled" : "tabcontentdisabled"}>
                    <UploadBorrowers />
                </div>
                <div id="manage-user"
                    className={this.state.activeTab === "manage-user" ? "tabcontentenabled" : "tabcontentdisabled"}>
                    <ManageUsers />
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
        )
    }
}