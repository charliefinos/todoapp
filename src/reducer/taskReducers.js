import { ADD_TASK } from '../constants/taskConstants'

export const taskListReducer = (state = { task: [] }, action) => {
    switch (action.type) {
        case ADD_TASK:
            const item = action.payload

            return {
                ...state,
                task: [...state.task, item]
            }
        default:
            return state
    }

}

