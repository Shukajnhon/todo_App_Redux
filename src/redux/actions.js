// addTodo
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

// search Filter Change
export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

// status Filter Change
export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}


// priority Filter Change
export const prioritiesFilterChange = (priorities) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priorities
    }
}