import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn html', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn css', completed: true, priority: 'High' },
        { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
    ],
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
    },
});

export const { addTodo, toggleTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;
