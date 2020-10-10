import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class BookOption extends React.Component {
    render() {
        return (<table class="table table-bordered table-striped">
    if book.availableTagNumber.length if available books are there 
        for loop for books availabel
        <tr>
            <td>
                book.availableTagNumber[counter].tagNumber
            </td>
            <td>
                if(book.availableTagNumber[counter].disabled then Missing else
                    <button onclick='Library.borrowTitle("<%= book.id %>", "<%= book.title %>", "<%= book
                            .availableTagNumber[counter].tagNumber %>")' class="btn button-grey">Borrow
                    </button>
            </td>
            if (isLibrarian)
                if(book.availableTagNumber[counter].disabled)
                    <td>
                        <button class="btn button-grey" onclick='Library.enableBook("<%= book.availableTagNumber[counter].tagNumber %>")'>Enable</button>
                    </td>
                    <td>
                        <button class="btn button-grey" onclick='Library.disableBook("<%= book.availableTagNumber[counter].tagNumber %>")'>Disable</button>
                    </td>
        </tr>
        if(book.unavailableBooksWithBorrower.length)
        for loop for unavailable books
        <tr>
            <td>
                book.unavailableBooksWithBorrower[counter].tag_number
            </td>
            <td>
                <div class="h4">
                    <b>Borrowed By: </b>book.unavailableBooksWithBorrower[counter].email 
                </div>
            </td>
        </tr>
    </table>
        )
    }
}