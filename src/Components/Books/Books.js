import React, {Component} from 'react';
import { connect } from 'react-redux';

import Book from './Book';
import { deleteBook } from '../../actions/Bookactions/bookActions';

class Books extends Component {
    constructor(props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(data) {
      this.props.onEdit(data);
    }

    render() {
        console.log("--------", this.props);
        return (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>              
              {
                this.props.books.map((book) => {
                  return (
                    <Book key={book.id}
                          book={book}
                          onEdit={this.handleEdit}
                          onDelete={this.props.onDelete}
                      />     
                  )
                })
              }
            </tbody>
          </table>
        )
    }
}

const mapStateToProps = state => {
    console.log("state-----", state);
  return {
    books: state
    ,
  }
};

const mapDispatchToProps = dispatch => {
  return {    
    onDelete: (id) => {
      dispatch(deleteBook(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);