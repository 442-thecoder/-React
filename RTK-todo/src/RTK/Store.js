// RTK/Store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addToDo: (state, action) => {
            if (action.payload.text.trim() !== '') {
                state.push(action.payload);
            }
        },
        deleteToDo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        updateToDo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.find(todo => todo.id === id);
            if (todoToUpdate && text.trim() !== '') {
                todoToUpdate.text = text;
            }
        }
    }
});

export const { addToDo, deleteToDo, updateToDo } = todoSlice.actions;

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer
    }
});

export default store;
