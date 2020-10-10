import React from 'react';
// import '../../../assets/styles/reports.css'
import Table from '../../views/reports/Table'
export default class Transaction extends React.Component {
    render() {
        return (
            <div className="report background-white">
                <Table />
                <div className="col-md-1"></div>
            </div>
        )
    }
}