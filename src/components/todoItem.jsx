import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import {MdDelete,MdDone} from 'react-icons/md';
const CheckCircle = styled.div`
    display: flex;
    flex: 1;
    border: 2px solid #25F0B7;
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 30px;
`;

const Text = styled.div`
    flex: 1;
    
    font-size: 20px;
    
`;

const Remove = styled.div`
    flex: 1;
    
`;

function TodoItem() {
    return(
        <>
            <CheckCircle><MdDone /></CheckCircle>
            <Text>열심히 해보자~!</Text>
            <Remove><MdDelete /></Remove>
        </>
    )
    
}

export default TodoItem;