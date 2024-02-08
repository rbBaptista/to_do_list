import './App.css'	// Importando o arquivo de estilos

import { useState } from 'react'

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, text: 'Fazer café', category: "Trabalho", isCompleted: false },
    { id: 2, text: 'Ir para a academia', category: "Pessoal", isCompleted: false },
    { id: 3, text: 'Estudar React', category: "Estudos", isCompleted: false },
  ]);

  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState('All');

  const [sort, setSort] = useState('A-Z');

  const addTodo = (text, category) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const completeTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='todo-list'>
        {todos 
          .filter((todo) => filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
        )
          .sort((a, b) => sort === 'A-Z' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map(todo => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );

}

export default App
