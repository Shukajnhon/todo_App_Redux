import { combineReducers } from 'redux'
import filterReducer from '../components/Filters/FiltersSlice'
import todoListReducer from '../components/TodoList/TodosSlice'
// console.log(todoListReducer)

// const rootReducer = (state = {}, action) => {

//     return {
//         filters: filterReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action),
//     }
// }

// lỗi sau khi dùng combinReducer Todo bị mất render

const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoListReducer,
})

export default rootReducer; 