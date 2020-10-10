import React from 'react';
export default class Error403 extends React.Component {
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <h3 className="error-message">
                        404 - Page not found.
                    </h3>
                </div>
                <div className="col-md-2">
                </div>
            </div>
        </div>
    }
}