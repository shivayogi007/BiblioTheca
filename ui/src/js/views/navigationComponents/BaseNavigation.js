import React from 'react';
export default class BaseNavigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse background-white" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-left">left-nav-elements</ul>
                        <ul className="nav navbar-nav navbar-right">right-nav-elements</ul>
                    </div>
                </div>
            </nav>
        )
    }
}