import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { taskListReducer } from './reducer/taskReducers'
import taskItemsFromFile from './taskItems'


const reducer = combineReducers({
    taskReducer: taskListReducer,
})

const initialState = {
    task: {
        taskItems: taskItemsFromFile
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store