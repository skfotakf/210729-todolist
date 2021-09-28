import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    position: relative;

    margin-top: 96px;
    margin-bottom: 32px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px;
    background: #FFF;

`;

function TodoTemplate({children}) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
        
    
}

export default TodoTemplate;