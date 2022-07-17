import React from 'react';

const Form = ({inputKey, setKey, inputText, setInputText, todos, setTodos, setStatus}) => {
  const inputKeyHandler = (e) => {
    console.log(e.target.value);
    setKey(e.target.value);
  };
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: inputKey}
    ]);
    setKey("");
    setInputText("");
  }
  const statusHandler = (e) => {
    setStatus(e.target.value);
  } 
  return (
    <form>
      ID: <input value= {inputKey} onChange={inputKeyHandler} type="text" className="todo-input-id" placeholder="0" />
      Task: <input value= {inputText} onChange={inputTextHandler} type="text" className="todo-input-task" placeholder="Rest"/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name='todos' className="filter-todo">
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="incomplete">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}
export default Form;