import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../actions/taskActions'
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        dispatch(addTask(value))
        addTodo(value);
        setValue('')
    }

    return (
        <form className='submit' onSubmit={handleSubmit}>
            <input type='text' className='input' value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}

export default TodoForm