import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todoList',
    initialState: {
        status: 'idle',
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.todos.find(
                (t) => t.id === action.payload,
            );
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
    },
});

export const { addTodo, toggleTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;
