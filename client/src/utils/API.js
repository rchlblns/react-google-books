import axios from "axios";

const API = {

    //Gets search results from the Google Books API
    getSearchResults: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&key=${process.env.REACT_APP_GB_API_KEY}`)
    },
    // Gets all saved books from db
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books/", bookData);
    }, 
    // Deletes a book from the database with the given id
    deleteBook: function(id) {
        return axios.delete(`/api/books/${id}`);
    }
};

export default API;