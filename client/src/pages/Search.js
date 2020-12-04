import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import BookResults from "../components/BookResults";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import * as Scroll from "react-scroll";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

const StyledToast = styled(ToastContainer).attrs({})`
    .Toastify__progress-bar--dark {
       background: #5A6268;
    }
`

class Search extends Component {

  state = {
    search: "",
    books: [],
    loading: false,
    error: "",
    message: ""
  };

  handleInputChange = (event) => {
    event.preventDefault();
    //sets state of search to current form input, regex replaces all spaces with "+"
    let query = event.target.value.replace(/\s/g, "+");
    this.setState({
      search: query
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    })
    this.showResults()
  };

  showResults = () => {
    this.getSearchResults();
    this.scrollToResults();
  }

  getSearchResults = () => {
    API.getSearchResults(this.state.search)
      .then(res => {
        this.setState({
          books: res.data.items,
          loading: false
        });
      })
      .catch(() =>
        this.setState({
          books: [],
          message: "Your search did not match any book results. Please try a different query.",
          loading: false
        })
      );
  }

  scrollToResults = () => {
    scroller.scrollTo("scrollTarget", {
      duration: 500,
      delay: 650,
      smooth: true
    })
  }

  handleBookSave = (event) => {
    event.preventDefault();

    const targetID = event.target.getAttribute("id");

    let targetBook = this.state.books.find(book => book.id === targetID);

    API.saveBook({
      googleId: targetBook.id,
      title: targetBook.volumeInfo.title,
      authors: targetBook.volumeInfo.authors,
      description: targetBook.volumeInfo.description,
      image: targetBook.volumeInfo.imageLinks.thumbnail,
      link: targetBook.volumeInfo.infoLink
    })
      .then(() =>
        toast.dark("Book saved to your collection!", {
          transition: Slide,
          position: "bottom-right",
          autoClose: 2800,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false
        }),
        this.getSearchResults(),
      )
      .catch((err) =>
        console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          loading={this.state.loading}
        />
        <Container>
          <Row id="scrollTarget">
            {this.state.books.length ? (
              <Col>
                <h1 className="text-center p-4">Your results</h1>
                {this.state.books.map(book => (
                  <>
                    <BookResults
                      key={book.id}
                      id={book.title}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Not Provided"}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/128x180"}
                      link={book.volumeInfo.infoLink}
                      Button={() => (
                        <SaveBtn
                          handleBookSave={this.handleBookSave}
                          id={book.id}
                        />
                      )}
                    />
                    <StyledToast />
                  </>
                ))}
              </Col>
            ) : (
                <Col>
                  <h2>{this.state.message}</h2>
                </Col>
              )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;