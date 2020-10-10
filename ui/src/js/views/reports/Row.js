import React from 'react';
// import '../../../assets/styles/reports.css'
export default class Header extends React.Component {
    render() {
        return (<tr>
            <td className="serial-no" id={`"<%=page + "-serial-no" %>"`}>
                index +1
            </td>
            report data for each
                <td className="<%=each.split(' ').join('-')%>" id={`"<%=page + "- " + each.split(' ').join('-')%>"`} >
                <div className="scrollable-td" title="<%- report[each]%>">report data or "&nbsp;"</div>
            </td >
        </tr >
        )
    }
}
