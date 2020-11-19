import React from 'react'

const Todo = ({ task, index, completeTodo, deleteTask }) => {
    return (
        <div style={{ textDecoration: task.isCompleted ? 'line-through' : '' }} className="todo">
            {task.task}
            <div>
                <button onClick={() => deleteTask(index)}>Complete</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
        </div>
    )
}

export default Todo