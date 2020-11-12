import { ADD_TASK } from '../constants/taskConstants'


export const addTask = (task) => (dispatch, getState) => {

    dispatch({
        type: ADD_TASK,
        payload: {
            task
        }
    })

}

export default addTask