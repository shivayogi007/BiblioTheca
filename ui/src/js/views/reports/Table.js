import React from 'react';
// import '../../../assets/styles/reports.css'
import Header from './Header';
import DownloadCSV from './DownloadCSV';
import Row from './Row'
export default class Table extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-10 report">
                    <h1 className="header-reports">"Books I have read" </h1>
                    <table className="table table-bordered table-fixed" id="report-data-header">
                        <Header />
                    </table>
                    <div id="report-data-rows">
                        <table className="table table-bordered table-fixed">
                            <tr className="one-line-truncated">
                                <Row />
                                reports Data for
                </tr>
                        </table>
                    </div>
                    <DownloadCSV />
                    <h1 className="header-reports no-transaction-message">
                        "You haven't read any books."
        </h1>
                </div>
                <div className="col-md-1">
                </div>
            </div>

        )
    }
}