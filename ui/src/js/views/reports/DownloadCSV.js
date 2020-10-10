import React from 'react';
export default class DownloadCsv extends React.Component {
  downloadCsv() { }
  render() {
    return <button className="download-button" onClick={this.downloadCsv}>Download CSV</button>
  }
}