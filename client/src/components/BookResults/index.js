import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import InfoButton from "react-bootstrap/Button";
import styled from "styled-components";

const StyledCard = styled(Card)`
border-radius: 12px;
background-color: #12110f;
color: #E2E6EA;  
`

const BookResults = ({ id, title, authors, link, description, image, Button }) => {
  return (
    <ul className="list-unstyled">
      <StyledCard className="" key={id}>
        <img
          src={image}
          alt={title}
          width={"150px"}
          className="d-lg-none d-flex align-self-center mt-4" />
        <Media as="li" id={title + "Card"} className="p-4">
          <img
            src={image}
            alt={title}
            width={"128px"}
            className="mr-3 d-none d-lg-block" />
          <Media.Body>
            <h4>{title}</h4>
            <span>{authors}</span>
            <p className="mt-3">{description}</p>
              <InfoButton href={link} target="_blank" rel="noreferrer noopener" variant="secondary" className="mb-2">View on Google Books</InfoButton>{" "}
              <Button />
          </Media.Body>
        </Media>
      </StyledCard>
    </ul>
  )
}

export default BookResults;