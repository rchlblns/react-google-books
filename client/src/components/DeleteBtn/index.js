import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const DeleteButton = styled(Button)`
:hover {
    background-color: red;
    color: #FFF;
    border-color: transparent;
}
`

const DeleteBtn = (props) => {
    return (
        <DeleteButton
        type="button"
        variant="outline-light"
        id={props.id}
        onClick={props.handleBookDelete}
        >
            Remove Book From Collection
        </DeleteButton> 
    )
}

export default DeleteBtn;