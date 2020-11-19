import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { taskListReducer } from './reducer/taskReducers'
import taskItemsFromFile from './taskItems'


const reducer = combineReducers({
    taskList: taskListReducer,
})

//Get the data from local Storage
const taskFromStorage = localStorage.getItem('taskItems') ? JSON.parse(localStorage.getItem('taskList')) : []


const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store