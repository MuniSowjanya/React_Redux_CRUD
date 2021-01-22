import { ADD_BOOK, EDIT_BOOK, FETCH_BOOKS, DELETE_BOOK} from './types';
import axios from 'axios';

const url = 'https://books-88a4a-default-rtdb.firebaseio.com/books.json';

export const createBook = (book) => {  
    if (book.id) {
        const data = {
            ID: book.id,
            Title: book.Title,
            Author: book.Author,
            Year: book.Year,
        };

        return (dispatch) => {
            updateBook(dispatch, data);
        }
    } else {
        const data = {
            Title: book.Title,
            Author: book.Author,
            Year: book.Year,
        };

        return (dispatch) => {
            return axios.post(url, data)
                .then(response => {
                    const id = response.data;
                    return axios.get(`${url}/${id}`).then((response) => {
                        dispatch(createBookSuccess(response.data));
                    }).catch(error => {
                        throw(error);
                    });                                        
                })
                .catch(error => {
                    throw(error);
                })
        }
    }
};

export const createBookSuccess = (book) => {
    return {
        type: ADD_BOOK,
        payload: {
            id: book.ID,
            Title: book.Title,
            Author: book.Author,
            Year: book.Year,
        }
    }
};

export const updateBookSuccess = (book) => {
    return {
        type: EDIT_BOOK,
        payload: {
            id: book.ID,
            Title: book.Title,
            Author: book.Author,
            Year: book.Year,
        },
    };
};

const updateBook = (dispatch, data) => {
    const id = data.ID;
    return axios.put(url, data)
        .then(() => {          
            return axios.get(`${url}/${id}`).then((response) => {
                dispatch(updateBookSuccess(response.data));
            }).catch((error) => {
                throw(error);
            });    
        })
        .catch(error => {
            throw(error);
        });
};

export const deleteBookSuccess = (id) => {
    return {
        type: DELETE_BOOK,
        payload: {
            id: id,
        }
    }
};

export const deleteBook = (id) => {
    return (dispatch) => {
        return axios.delete(`${url}/${id}`)
            .then(() => {
                dispatch(deleteBookSuccess(id));
            }).catch(error => {
                throw(error);
            })
    }
};

export const fetchBooks = (books) => {
    return {
        type: FETCH_BOOKS,
        payload: books,
    }
}

const normalizeResponse = (data) => {
    const arr=[]
    for(const key in data){
        arr.push(data[key])
    }
    // const arr = data.map(item => {
    //     const keys = Object.keys(item);

    //     keys.forEach(k => {
    //         item[k.toLowerCase()] = item[k];
    //         delete item[k];
    //     });

    //     return item;
    // });

    return arr;
    console.log("---arr",arr);
};

export const fetchAllBooks = () => {    
    return (dispatch) => {
        return axios.get(url)
            .then(response => {  
                //convert attributes from uppercase to lowercase
                const data = normalizeResponse(response.data);
                dispatch(fetchBooks(data));
            }).catch(error => {
                throw(error);
            })
    };
};