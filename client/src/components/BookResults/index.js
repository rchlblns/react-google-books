import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import InfoButton from "react-bootstrap/Button";
import styled from "styled-components";

const StyledCard = styled(Card)`
border-radius: 12px;
// border-color: #212529;
background-color: #12110f;
color: #E2E6EA;  
`

const BookResults = ({ id, title, authors, link, description, image, Button}) => {
  return (
    <ul className="list-unstyled">
      <StyledCard className="" key={id}>
        <Media as="li" id={title + "Card"} className="p-4">
          <img
            src={image}
            alt={title}
            className="mr-3" />
          <Media.Body>
            <h4>{title}</h4>
            {/* <span>{authors.join(", ")}</span> */}
            <span>{authors}</span>
            <p className="mt-3">{description}</p>
            <InfoButton href={link} target="_blank" rel="noreferrer noopener" variant="secondary">View on Google Books</InfoButton>{" "}
            <Button />
          </Media.Body>
        </Media>
      </StyledCard>
    </ul>
  )
}

export default BookResults;