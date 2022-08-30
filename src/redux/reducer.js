import { combineReducers } from 'redux';
import filtersReducer from '../components/Filters/FiltersSlice'
import todosReducer from '../components/TodoList/todosSlice'

// const rootReducer = (state = {}, action) => {
//   return{
//       filters:filtersReducer(state.filters, action),
//       todoList: todosReducer(state.todoList, action)
//   }
// };

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todosReducer
})

export default rootReducer
