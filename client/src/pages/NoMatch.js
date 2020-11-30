import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../components/Navbar";

function NoMatch() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col size="md-12">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="crying face emoji">
                😭
              </span>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NoMatch;