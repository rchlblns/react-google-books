import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import BookResults from "../components/BookResults";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const StyledToast = styled(ToastContainer).attrs({})`
    .Toastify__progress-bar--dark {
       background: #5A6268;
    }
`

class Saved extends Component {

    state = {
        books: []
    };

    // gets all saved books from db
    componentDidMount() {
        this.getCollection();
    };

    getCollection = () => {
        API.getBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };

    //handles book delete
    handleBookDelete = (event) => {

        event.preventDefault();

        // grabs _id of specific entry
        const targetID = event.target.getAttribute("id");

        // API uses _id to delete book from collection and returns updated list
        API.deleteBook(targetID)
            .then(res => {
                toast.dark("Book was removed from collection.", {
                    transition: Slide,
                    position: "bottom-right",
                    autoClose: 2800,
                    closeOnClick: true,
                    pauseOnHover: true,
                    hideProgressBar: false
                });
                this.getCollection();
                // 
            }
            )
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row className="p-5">
                        <Col><h1 className="text-center">Your Collection</h1></Col>
                    </Row>
                    <Row>
                        {this.state.books.length ? (
                            <Col>
                                {this.state.books.map(book => (
                                    <>
                                        <BookResults
                                            key={book.googleId}
                                            id={book.title}
                                            title={book.title}
                                            authors={book.authors.length > 1 ? book.authors.join(", ") : book.authors}
                                            description={book.description}
                                            image={book.image}
                                            link={book.infoLink}
                                            Button={() => (
                                                <DeleteBtn
                                                    handleBookDelete={this.handleBookDelete} id={book._id} />
                                            )}
                                        />
                                        <StyledToast />
                                    </>
                                ))}
                            </Col>
                        ) : (
                                <h2>No Saved Books</h2>
                            )}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Saved;