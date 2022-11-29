const initState = {
    filters: {
        search: '',
        status: '',
        priority: []
    },
    todoList: [
        { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Redux', completed: true, priority: 'Hight' },
        { id: 1, name: 'Learn JavaScript', completed: false, priority: 'Low' },
    ]
}



const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state, action.payload]
            }

        default:
            return state;
    }
}

export default rootReducer;