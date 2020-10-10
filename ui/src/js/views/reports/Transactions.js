import React from 'react';
// import '../../../assets/styles/tab.css'
import OnHoldTitlesTable from './OnHoldTitlesTable'
import Table from '../../views/reports/Table'
export default class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: "all-reports" }
    }

    changeTab(tabName) {
        this.setState({ activeTab: tabName })
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-1"></div>
                <div id="reports" className="col-md-10">
                    <div className="tab" id="transaction-option">
                        <button
                            className={this.state.activeTab === "all-reports" ? "tablinksActive" : "tablinks"}
                            onClick={() => this.changeTab('all-reports')}
                            data-id="all-reports"
                        >Library Transactions
                    </button>
                        <button
                            className={this.state.activeTab === "on-hold-reports" ? "tablinksActive" : "tablinks"}
                            onClick={() => this.changeTab('on-hold-reports')}
                            data-id="on-hold-reports"
                        >Currently Borrowed
                    </button>
                    </div>

                    <div id="all-reports"
                        className={this.state.activeTab === "all-reports" ? "tabcontentenabled" : "tabcontentdisabled"}
                    >
                        <Table />
                    </div>
                    <div id="on-hold-reports"
                        className={this.state.activeTab === "on-hold-reports" ? "tabcontentenabled" : "tabcontentdisabled"}
                    >
                        <OnHoldTitlesTable />
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    }
}