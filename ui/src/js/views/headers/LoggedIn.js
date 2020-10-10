import React from 'react';
export default class Loggedin extends React.Component {
    render() {
        return (
            <div className="float-right">
                <div id="profile-image" className="profile-photo">
                </div>
                <div className="visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">
                    <div id="email-id"></div>
                </div>
                <div className="visible-xs-inline-block">
                    <div id="email-id-xs"></div>
                </div>
                <a href="/auth/logout" title="logout">
                    <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i>
                </a>
            </div>
        )
    }
}
