import React from 'react';
// import '../../assets/styles/importer.css';
// import '../../assets/styles/footer.css';
export default class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <footer className="footer">
          <i className="fa fa-bolt"></i> By STEP
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=step-library@thoughtworks.com&su=FeedBack for STEP Library&body=Hello Team"
            target="_blank" rel="noopener noreferrer" className="feedback">Feedback <i className="fa fa-envelope"></i></a>
        </footer>
      </div>)
  }
}