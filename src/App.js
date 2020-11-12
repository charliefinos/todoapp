import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  )
}


// const App = () => {
//   const [todos, setTodos] = useState(taskItems);

//   const dispatch = useDispatch()

//   const addTodo = (text) => {
//     const newTodos = [...todos, { text }]
//     setTodos(newTodos);
//   }

//   const completeTodo = (index) => {
//     const newTodos = [...todos];
//     if (newTodos[index].isCompleted === true) {
//       newTodos[index].isCompleted = false
//     } else {
//       newTodos[index].isCompleted = true
//     }

//     setTodos(newTodos)
//   }

//   const deleteTodo = (index) => {
//     const newTodos = [...todos]
//     newTodos.splice(index, 1);
//     setTodos(newTodos)
//   }

//   return (
//     <div className="app">
//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
//         ))}
//         <TodoForm addTodo={addTodo} />
//       </div>
//       <div>
//         <Footer />
//       </div>

//     </div>
//   )
// }

export default App