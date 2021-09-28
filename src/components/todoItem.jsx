import React from "react";
import styled from "styled-components";

import {MdDelete,MdDone} from 'react-icons/md';
const CheckCircle = styled.div`

`;

const Text = styled.div``;

const Remove = styled.div``;

function TodoItem({id,text,done}) {
    return(
        <>
            <CheckCircle>{MdDone}</CheckCircle>
            <Text>{text}</Text>
            <Remove>{MdDelete}</Remove>
        </>
    )
    
}

export default TodoItem;