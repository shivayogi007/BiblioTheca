import React from 'react';
// import '../../../assets/styles/reports.css'
export default class Header extends React.Component {
  render() {
    return (
      <thead>
        <th className="serial-no" id={`<%=page + "-serial-no" %>`}>
          Sr.
      </th>
        for each 0f reportsData
      < th className={`each.split(' ').join('-')`}> id={`<%=page + "-" + each.split(' ').join('-')%>`}>
        <div className="scrollable-td">data</div>
        </th >
      </thead >
    )
  }
}