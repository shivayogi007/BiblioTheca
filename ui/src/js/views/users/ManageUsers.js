import React from 'react';
// import '../../../assets/styles/reports.css';
export default class ManageUsers extends React.Component {
    render() {
        return (
            <div style={{ padding: "2%" }}>
                <table id="example" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Sr.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Enabled</th>
                            <th>Borrower</th>
                            <th>Librarian</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Sr.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Enabled</th>
                            <th>Borrower</th>
                            <th>Librarian</th>
                            <th>Admin</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {/* users for loop */}
                        <tr>
                            <td>id index + 1</td>
                            <td>'name'</td>
                            <td>email</td>
                            <td>report information</td>
                            <td>
                                <input type="checkbox" className="checkbox"
                                    id="<%= report['email'].split('@')[0] + each %>"
                                    data-email="<%= report['email'] %>"
                                    data-field="<%= each %>"
                                    checked readOnly />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}