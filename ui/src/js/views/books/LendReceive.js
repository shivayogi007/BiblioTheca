import React from 'react';
// import '../../../assets/styles/lendReceive.css';
// import '../../../assets/styles/tab.css'
import LendReceivePartial from './LendReceivePartial'
export default class LendReceive extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: "lend-book" }
    }

    changeTab(tabName) {
        this.setState({ activeTab: tabName })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-1"></div>
                <div id="add-book" className="col-md-10">
                    <div className="tab">
                        <button
                            className={this.state.activeTab === "lend-book" ? "tablinksActive" : "tablinks"}
                            onClick={() => this.changeTab('lend-book')}
                            id="defaultOpen"
                            data-id="lend-book"
                        >Lend
                    </button>
                        <button
                            className={this.state.activeTab === "receive-book" ? "tablinksActive" : "tablinks"}
                            onClick={() => this.changeTab('receive-book')}
                            data-id="receive-book"
                        >Receive</button>
                    </div>
                    <div id="lend-book"
                        className={this.state.activeTab === "lend-book" ? "tabcontentenabled" : "tabcontentdisabled"}>
                        <LendReceivePartial action="lend" />
                    </div>
                    <div id="receive-book"
                        className={this.state.activeTab === "receive-book" ? "tabcontentenabled" : "tabcontentdisabled"}
                    >
                        <LendReceivePartial action="receive" />
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>)
    }
}

