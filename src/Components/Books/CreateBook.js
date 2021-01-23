import React, { Component } from 'react';

class CreateBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            Title: '',
            Author: '',
            Year: '',
        };
     console.log("-createbook state",this.state);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.handleReset(e);
    }

    handleValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({
            id: 0,
            Title: '',
            Author: '',
            Year: '',
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.book) {
            this.setState({
                id: nextProps.book.id,
                Title: nextProps.book.Title,
                Author: nextProps.book.Author,
                Year: nextProps.book.Year,
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text"
                                className="form-control"
                                required
                                name="Title"
                                value={this.state.Title}
                                onChange={this.handleValueChange}                                
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input  type="text"
                                className="form-control"
                                required
                                name="Author"
                                value={this.state.Author}
                                onChange={this.handleValueChange}                                                                
                        />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input  type="text"
                                className="form-control"
                                required
                                name="Year"
                                value={this.state.Year}
                                onChange={this.handleValueChange}                                                                
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">{this.state.id ? 'Update': 'Add'}</button>
                        <button type="botton" onClick={this.handleReset}>Clear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateBook;