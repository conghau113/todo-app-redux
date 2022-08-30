import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const searchTextSelector = (state) => state.filters.search;
export const filterPrioritiesSelector = (state) => state.filters.priorities;

export const todosRemeaningSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      //   console.log("priorities before: ", priorities);
      if (status === "All") {
        // console.log("priorities: ", priorities);
        // console.log("todo.priority: ", todo.priority);
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
