import React from 'react';
import listView from '../../../assets/images/list_view.svg'
import gridView from '../../../assets/images/grid_view.svg'
// import '../../../assets/styles/allBooks.css'
// import '../../../assets/styles/importer.css'
import TitleGridView from './TitleGridView';
import TitleListView from './TitleListView';
export default class AllBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = { viewType: "list-toggle" }
    }

    changeView(viewType) {
        this.setState({ viewType: viewType })
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="toggle-container">
                        <button
                            className={this.state.viewType === "list-toggle" ? "toggle-active" : "hidden-xs"}
                            onClick={() => this.changeView('list-toggle')}
                            id="list-toggle"
                        ><img src={listView} alt="listView" />
                        </button>
                        <button
                            className={this.state.viewType === "grid-toggle" ? "toggle-active" : "hidden-xs"}
                            onClick={() => this.changeView('grid-toggle')}
                            id="grid-toggle"
                        ><img src={gridView} alt="listView" />
                        </button>
                    </div>
                </div>
                <div id="title-grid-view-container"
                    className={this.state.viewType === "grid-toggle" ? "row all-books-container show" : "row all-books-container hide"}>
                    <TitleGridView />
                    <TitleGridView />
                </div>
                <div id="title-list-view-container"
                    className={this.state.viewType === "list-toggle" ? "row all-books-container show" : "row all-books-container hide"}>
                    <TitleListView />
                    <TitleListView />
                </div>
            </>
        )
    }
}