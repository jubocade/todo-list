import React from 'react';
import Todo from './Todo';
const TodoList = ({setTodos, todos, filteredToDos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {filteredToDos.map(todo => (
                   <Todo
                     setTodos={setTodos}
                     todos={todos}
                     todo={todo}
                     text={todo.text}
                     key={todo.id}
                    />
               ))}
            </ul>
        </div>
    )
}

export default TodoList;