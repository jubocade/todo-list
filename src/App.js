import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    getTodos();
  }, [])
  
  useEffect(() => {
    filterHandler();
    saveTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredToDos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredToDos(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilteredToDos(todos);
          break;
    }
  }

  const saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.getItem('todos', JSON.stringify([]));
    }

    else {
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo);
    }
  }
  return (
    <div className="App">
     <header>
       <h1>Todo list</h1>
     </header>
     <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
     <TodoList setTodos={setTodos} todos={todos} filteredToDos={filteredToDos}/>
    </div>
  );
}

export default App;
