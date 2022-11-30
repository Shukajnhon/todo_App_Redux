import { createSelector } from 'reselect'

export const searchTextSelector = (state) => state.filters.search
export const filterStatusSelector = (state) => state.filters.status
export const filterPrioritiesSelector = (state) => state.filters.priorities
export const todoListSelector = (state) => state.todoList



export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => {
        console.log("Status", status)
        console.log("TodoList", todoList)
        console.log("Priorities", priorities)
        console.log("SearchText", searchText)

        return todoList.filter((todo) => {
            if (searchText) {
                if (!priorities) {
                    return todo.name.includes(searchText)
                }
                if (priorities.length) {
                    return todo.name.includes(searchText) && priorities.includes(todo.priority)
                }
                return todo.name.includes(searchText)
            }

            if (status === "Completed") {
                return todo.completed
            } else if (status === "Todo") {
                return !todo.completed
            }

            if (priorities) {
                if (priorities.includes("High")) {
                    return priorities.includes(todo.priority)
                } else if (priorities.includes("Medium")) {
                    return priorities.includes(todo.priority)
                } else if (priorities.includes("Low")) {
                    return priorities.includes(todo.priority)
                }
                return todo.name
            } else {
                return todo.name
            }
        })



        // if (searchText) {
        //     return todoList.filter((todo) => {
        //         if (priorities) {
        //             return todo.name.includes(searchText) && priorities.includes(todo.priority)
        //         } else {
        //             return todo.name.includes(searchText)
        //         }
        //         // return priorities.length !== "undefined" ? todo.name.includes(searchText) && priorities.includes(todo.priority) : todo.name.includes(searchText)
        //     })
        // } else if (status) {
        //     return todoList.filter((todo) => {
        //         if (status === "Completed") {
        //             return todo.completed
        //         } else if (status === "Todo") {
        //             return !todo.completed
        //         } else {
        //             return todo.name
        //         }
        //     })
        // } else {
        //     return todoList
        // }


        // =====
        // return todoList.filter((todo) => {
        //     if (status === "All") {
        //         return todo.name.includes(searchText)
        //     }
        //     return todo.name.includes(searchText) && (status === "Completed" ? todo.completed : !todo.completed)
        // })



    }

);