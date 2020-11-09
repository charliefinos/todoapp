import React, { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'learn about react',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted === true) {
      newTodos[index].isCompleted = false
    } else {
      newTodos[index].isCompleted = true
    }

    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App