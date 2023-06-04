import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusFilterSelector,
    priorityFilterSelector,
    (todoList, textSearch, status, priorities) => {
        return todoList.filter((todo) => {
            let todoWithSearch = todo.name
                .toLowerCase()
                .includes(textSearch.toLowerCase());

            if (status === 'All') {
                return priorities.length
                    ? todoWithSearch && priorities.includes(todo.priority)
                    : todoWithSearch;
            }
            return (
                todoWithSearch &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
    },
);
