import React from "react";

import { createGlobalStyle } from "styled-components";
import TodoTemplate from './components/todoTemplate';
import TodoHead from './components/todoHead';
import TodoList from './components/todoList';
// import {TodoProvider} from './components/todoContext';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return(
    <>
    
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    
    </>
  );
}

export default App;