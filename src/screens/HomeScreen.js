import React, { useState, useEffect } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'
import Footer from '../components/Footer'
import taskItems from '../taskItems'
import { taskListReducer } from '../reducer/taskReducers'
import { removeTask } from '../actions/taskActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const taskData = useSelector(state => state.taskList)
    const { tasks } = taskData


    const [todos, setTodos] = useState(taskItems);



    const addTodo = (text) => {
        // const newTodos = [...todos, { text }]
        // setTodos(newTodos);
    }

    const completeTodo = (index) => {
        // const newTodos = [...todos];
        // if (newTodos[index].isCompleted === true) {
        //     newTodos[index].isCompleted = false
        // } else {
        //     newTodos[index].isCompleted = true
        // }

        // setTodos(newTodos)
    }

    const deleteTask = (index) => {
        dispatch(removeTask(index))
    }


    return (
        <div className="app">
            <div className="todo-list">
                {tasks.map((task, index) => (
                    <Todo key={index} index={index} task={task} completeTodo={completeTodo} deleteTask={deleteTask} />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    )
}

// const HomeScreen = () => {
//     const dispatch = useDispatch()

//     const tasks = useSelector(state => state.tasks)
//     const { task } = taskList


//     return (
//         <div className="app">
//             <div className="todo-list">
//                 {tasks.map((task, index) => (
//                     <Todo key={index} index={index} task={task} />
//                 ))}
//                 <TodoForm addTodo={addTodo} />
//             </div>
//         </div>
//     )
// }


export default HomeScreen