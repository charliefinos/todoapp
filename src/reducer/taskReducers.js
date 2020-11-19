import { ADD_TASK, REMOVE_TASK } from '../constants/taskConstants'

export const taskListReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
        case ADD_TASK:
            const task = action.payload

            return {
                ...state,
                tasks: [...state.tasks, task]
            }
        case REMOVE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(x => x !== state.tasks[action.payload])
            }

        }
        default:
            return state
    }

}

