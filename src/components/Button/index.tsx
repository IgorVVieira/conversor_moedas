import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: #50fa7b;
    font-weight: bold;
    color: black;
    border-radius: 12px;
    padding: 7px;
    margin-left: 10px;
`;

interface IButtonProps {
    text: string;
    acao: React.MouseEventHandler;
}

function Button(props: IButtonProps) {
    return (
        <StyledButton onClick={props.acao}>{props.text}</StyledButton>
    );
}

export default Button;