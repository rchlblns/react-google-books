import React from "react";
import { Row, Col } from "react-bootstrap"
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import background from "../../images/pexels-marta-dzedyshko-2067569.jpg";

const JumboHero = styled(Jumbotron)`
background-image: url(${background});
background-position: center;
background-size: cover;
height: 100vh;
display: flex;
position: relative;
flex-direction: column;
justify-content: center;

h1, h4 {
    color: #FFFFFF;
    text-align: center;
    z-index: 2;
}

&:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0; 
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0, 0.7);
}
`

const Jumbo = (props) => {
    return (
        <JumboHero fluid>
            <h1>Google Books Search</h1>
            <h4>Find and Save Books of Interest</h4>
            <Form>
                <Row className="align-items-center justify-content-center">
                    <Col xs={8} md={5}>
                        <Form.Label htmlFor="inlineFormInput" srOnly>Search for a book title</Form.Label>
                        <Form.Control
                            value={props.search}
                            onChange={props.handleInputChange}
                            type="text"
                            className="mb-2 text-center"
                            id="inlineFormInput"
                            placeholder="Type in a title"
                        />
                    </Col>
                </Row>
                <Row className="">
                    <Col xs={12} className="text-center">
                        <Button
                            type="submit"
                            variant="light"
                            onClick={props.handleFormSubmit}
                        >
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </JumboHero>
    );
}

export default Jumbo;