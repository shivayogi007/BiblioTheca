import React from 'react';
// import '../../../assets/styles/bulkUsersUpload.css'
export default class VerifyBulk extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-11 container">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-danger">if error show this Invalid format, header should be in (email)
                        format.</li></ul>
                </div>
                <div className="col-md-12" style={{ backgroundColor: "white" }}>
                    <div className="col-md-12 container">
                        <ul className="list-group">
                            else show this
            <li className="list-group-item list-group-item-danger messages">if already exist show this Emails(s) are already exists. </li>
                            <li className="list-group-item list-group-item-danger messages">Emails(s) <b>invalid emails list </b> are invalid.
            </li>
                        </ul>
                    </div>
                    <div className="col-md-2"></div>
                    if canBeAdded  show this
                <div className="col-md-8">
                        <table className="table table-fixed table-bordered">
                            <thead>
                                <tr>
                                    <th className="id">Sr.</th>
                                    <th className="email">Email</th>
                                    <th className="select"><input id="check-all-users" type="checkbox" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                canBeAdded for each
                                    <form action="/users/upload" method="post"></form>
                                <tr>
                                    <td className="id">++index</td>
                                    <td className="email">email</td>
                                    <td className="select"><input type="checkbox" name="<%= email %>" /></td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="submit-btn">
                            <input className="btn button-grey" type="submit" value="Submit" />
                        </div>

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </>

        )
    }
}