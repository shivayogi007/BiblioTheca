import React from 'react';
// import '../../../assets/styles/lendReceive.css';
export default class LendReceivePartial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: 'lend'
        }
    }
    render() {
        return (
            <div className="row content">
                <div className="col-md-3 col-sm-2 col-xs-2"></div>
                <div className="col-md-6 col-sm-8 col-xs-8">
                    <form autoComplete="off" name="lendForm" className="form-horizontal"
                        onSubmit={() => { }}>
                        <div className="form-group">
                            <label className="col-sm-8" id="email-label">
                                User Email
                </label>
                            <div className="col-sm-12">
                                <input name="email" type="email" id="<%= action%>email"
                                    className="form-control text-input-box" placeholder="email (i.e abc@domain.com)" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-8" id="tag-number-label">
                                Book id
                </label>
                            <div className="col-sm-12">
                                <input name="tagNumber" id="<%= action%>tag-number" type="text"
                                    className="form-control text-input-box"
                                    placeholder="Book id (i.e 200-10)" />
                            </div>
                        </div>
                        <span id="<%= action%>error-msg"></span>
                        <div className="form-group">
                            <div className="col-sm-offset-3 col-xs-offset-4 col-sm-6 col-xs-6">
                                <button id="submit" type="submit" className="btn btn-block text-input-box button-grey">
                                    {this.props.action}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-2">
                </div>
            </div>)
    }
}