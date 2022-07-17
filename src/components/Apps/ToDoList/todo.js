import React, { useState, useEffect } from "react";
import "./todo.css";
import Form from './todoForm'
import TodoList from "./todoList";
function Todo () {
  
  const [inputKey, setKey] = useState ("");
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      }
      else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
  }, []);
  useEffect(() => {
    const filteredHandler = () => {
      switch(status) {
        case 'complete':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'incomplete':
          setFilteredTodos(todos.filter(todo => todo.completed !== true));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  return(
    <div className="todoApp">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputKey={inputKey}
        setKey={setKey} 
        inputText={inputText}
        setInputText={setInputText}
        todos= {todos} 
        setTodos = {setTodos} 
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default Todo;