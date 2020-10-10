import React from 'react';
export default class Error404 extends React.Component {
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <h3 className="error-message">
                        403 - Forbidden: You are not authorized
                </h3>
                </div>
                <div className="col-md-2">
                </div>
            </div>
        </div>
    }
}