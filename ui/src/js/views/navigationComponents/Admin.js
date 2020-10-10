import React from 'react';
export default class Admin extends React.Component {
    render() {
        return (
            <li>
                <div className="admin-links link-container">
                    <a href='/users/' id="add-user-selection-bar">
                        <img src="/images/add-user.svg" alt="" />
                    </a>
                </div>
            </li>
        )
    }
}
