import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../../assets/styles/manualAddBook.css';

export default class ManualAddBook extends React.Component {
    updateImage() { }
    validateForm() { }
    render() {
        return (
            <div className="row">
                <form action="/books/addBooks" method="post" encType="multipart/form-data" onSubmit={this.validateForm}>
                    <div className="form-group form-horizontal col-md-9" id="details">
                        <div className="table-content">
                            <label className="control-label col-md-3" id="form-fields">ISBN:</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control text-input-box" id="isbn-input" placeholder="ISBN (i.e 1234567890)"
                                    min="1" name="isbn" />
                            </div>
                        </div>
                        <div className="table-content">
                            <label className="control-label col-md-3" id="form-fields">*Title:</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control text-input-box" id="title" name="title" placeholder="Title" />
                            </div>
                        </div>
                        <div className="table-content">
                            <label className="control-label col-md-3" id="form-fields">*Author:</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control text-input-box" id="author" name="author" placeholder="Author" />
                            </div>
                        </div>
                        <div className="table-content">
                            <label className="control-label col-md-3" id="form-fields">Publisher:</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control text-input-box" id="publisher" placeholder="Publisher" name="publisher" />
                            </div>
                        </div>
                        <div className="table-content">
                            <label className="control-label col-md-3" id="form-fields">Pages:</label>
                            <div className="col-md-3">
                                <input type="text" className="form-control text-input-box" id="pages-input" placeholder="No. of pages (i.e 1)"
                                    min="1" name="pages" />
                            </div>
                            <label className="control-label col-md-2" id="form-fields">Copies</label>
                            <div className="col-md-4" id="num-of-copies">
                                <input type="text" className="form-control text-input-box" id="copies" placeholder="No. of copies (i.e 1)"
                                    min="1" name="numOfCopy" />
                            </div>
                        </div>
                        <div className="table-content">
                            <label className="control-label col-md-3" id="form-fields">Description :</label>
                            <div className="col-md-9">
                                <textarea rows="5" name="description" id="description" />
                            </div>
                        </div>
                        <div className="col-md-offset-6 col-xs-offset-6 col-md-6 col-xs-6">
                            <button id="submit-manual" type="submit" className="btn btn-block button-grey">
                                Add
                </button>
                        </div>
                    </div>
                    <div className="form-group col-md-3" style={{ backgroundImage: `url(${"../images/bookDefault.svg"})` }} id="image-container">
                        <input type="file" id="file" className="choose-image-btn" name="thumbnailURL" onChange={this.updateImage} accept="image/x-png,image/jpeg" />
                        <label htmlFor="file" id="image-label">
                            <img src="/images/upload.svg" className="upload-img" alt="" />
                        </label>
                        <input type="button" style={{ backgroundImage: `url(${"../images/cancel.svg"})` }} id="remove-img-btn" />
                        <div className="link-for-image">
                            or
                <input type="text" className="form-control text-input-box" name="thumbnailURL" id="image-link" placeholder="link for image" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}