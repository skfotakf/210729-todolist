import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1{
        margin: 0;
        font-size: 36px;
    }
    .day {
        margin-top: 4px;
        color: gray;
    }
    .tasks {
        margin-top: 40px;
        font-size: 18px;
        font-weight: 1000;
        color: #25F0B7;
    }
`;
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
                <div className="tasks">오늘의 할일</div>
            </TodoHeadBlock>
        </>
    );
}

export default TodoHead;