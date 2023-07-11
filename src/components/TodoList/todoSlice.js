import { createSlice } from '@reduxjs/toolkit';

// const getLocaleStorage = () => {
//     let todoList = localStorage.getItem('todoList');
//     if (todoList) {
//         return JSON.parse(localStorage.getItem('todoList'));
//     }
//     return [];
// };

// [
//     { id: 1, name: 'Learn html', completed: false, priority: 'Medium' },
//     { id: 2, name: 'Learn css', completed: true, priority: 'High' },
//     { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
// ]

const todoSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find((t) => t.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
        editTodo: (state, action) => {
            const currentTodo = state.find((t) => t.id === action.payload.id);
            if (currentTodo) {
                const { name, completed, priority } = action.payload.data;

                currentTodo.name = name;
                currentTodo.completed = completed;
                currentTodo.priority = priority;
            }
        },
        removeTodo: (state, action) => {
            const index = state.findIndex((t) => t.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { addTodo, toggleTodoStatus, editTodo, removeTodo } =
    todoSlice.actions;

export default todoSlice.reducer;
