import React, {createContext,useContext,useRef,useReducer} from "react";
import styled from "styled-components";
import TodoList from "./todoList";

const initialTodos = [
    {
        id:1,
        text: '코딩 복습',
        done: true
    },
    {
        id:2,
        text: '피아노 연습',
        done: true
    },
    {
        id:3,
        text: '한자 공부',
        done: true
    },
    {
        id:4,
        text: '영어 단어 외우기',
        done: true
    }
]

function reducer(state,action) {
    switch (action.type) {
        case 'CREATE':
            return ;
        case 'TOGGLE':
            return ;
        case 'REMOVE':
            return ;
    }
}

