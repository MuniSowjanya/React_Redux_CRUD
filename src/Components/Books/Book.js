import React from 'react';

const Book = ({book, onEdit, onDelete }) => {
    console.log("--book",book);
    return (
        <tr>
            <td>{book.id}</td>            
            <td>{book.Title}</td>
            <td>{book.Author}</td>
            <td>{book.Year}</td>
            <td>
            <button className="btn btn-warning"
                onClick={() => onEdit(book)}>Edit</button>
            <button className="btn btn-danger"
                onClick={() => onDelete(book.id)}>Delete</button>
            </td>
        </tr>
    )
};

export default Book;