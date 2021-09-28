import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div``;
function TodoHead() {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const dayName = today.toLocaleDateString('ko-KR',{
        weekday: 'long'
    })

    return (
        <>
            <TodoHeadBlock>
                <h1>{dateString}</h1>  
                <div className="day">{dayName}</div>  
            </TodoHeadBlock>
        </>
    );
}

export default TodoHead;