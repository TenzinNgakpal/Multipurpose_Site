import React from 'react'
import TodoItems from "./todoItems"

const TodoList = ({ todos, setTodos, filteredTodos }) => {

  return (
    <div className='todo-container'>
      <ul className='todo-list'></ul>
      {filteredTodos.map(todo => (
          <TodoItems 
            text={todo.text} 
            id={todo.id} 
            key={todo.id}
            todos={todos} 
            todo={todo}
            setTodos={setTodos}
          />
        )
      )}
    </div>
  )
}

export default TodoList;