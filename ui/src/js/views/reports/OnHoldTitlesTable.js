import React from 'react';
// import '../../../assets/styles/reports.css'
import DownloadCsv from './DownloadCSV';
import Header from './Header';
import Row from './Row';
export default class OnHoldTitlesTable extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-10 report">
                    <h1 className="header-reports">
                        if borrowed availabel Currently Borrowed
        </h1>
                    <table className="table table-bordered table-fixed" id="report-data-header">
                        not returned books for
            <Header />
                    </table>
                    <div id="report-data-rows">
                        <table className="table table-bordered table-fixed">
                            <tr className="one-line-truncated">
                                reoport data for <Row />
                            </tr>
                        </table>
                    </div>
                    <DownloadCsv />
                    <h1 className="header-reports no-transaction-message">
                        "No transactions happened"
        </h1>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        )
    }
}