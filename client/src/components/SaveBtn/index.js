import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const SaveButton = styled(Button)`
:hover {
    background-color: #4CA746;
    color: #FFF;
    border-color: transparent;
}
`

const SaveBtn = (props) => {
    return (
        <SaveButton
        type="button"
        variant="outline-light"
        id={props.id}
        onClick={props.handleBookSave}
        >
            Save to Collection
        </SaveButton> 
    )
}

export default SaveBtn;