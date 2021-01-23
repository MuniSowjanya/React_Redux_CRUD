import React, { Component } from 'react';

import { connect } from 'react-redux';
import Books from './Books';
import CreateBook from './CreateBook';
import { createBook } from '../../actions/Bookactions/bookActions';
 //import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class AllBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: null,
    };    

    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(data) {
    this.setState({book: data});
  }

  render() {

    return (
      <div className="App">
        <div className="container">
        <div className="create-book-container">
            <h2>Books</h2>
          <CreateBook 
            onAdd={this.props.onAdd}
            book={this.state.book}
         
            />
        </div>
          <div className="books-table-container">
            <Books onEdit={this.onEdit}/>
          </div>  
        </div>              
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    book: state.book,
  }
};

const mapDispatchToProps = dispatch => {
    
  return {
    onAdd: (book) => dispatch(createBook(book))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);