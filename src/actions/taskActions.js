import { ADD_TASK, REMOVE_TASK } from '../constants/taskConstants'


export const addTask = (text) => (dispatch, getState) => {

    dispatch({
        type: ADD_TASK,
        payload: {
            task: text,
            isCompleted: false
        }
    })

    // localStorage.setItem('taskItems', JSON.stringify(text))
}

export const removeTask = (index) => (dispatch) => {
    dispatch({
        type: REMOVE_TASK,
        payload: index
    })
}


