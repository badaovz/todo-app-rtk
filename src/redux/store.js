import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../components/Filter/filterSlice';
import todoReducer from '../components/TodoList/todoSlice';

const store = configureStore({
    reducer: {
        filters: filterReducer,
        todoList: todoReducer,
    },
});

export default store;
