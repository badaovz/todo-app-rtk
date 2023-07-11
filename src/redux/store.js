import { configureStore, createStore } from '@reduxjs/toolkit';
import filterReducer from '../components/Filter/filterSlice';
import todoReducer from '../components/TodoList/todoSlice';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
