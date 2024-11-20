import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    filter: 'all' // 'all', 'done', 'notDone'
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                description: action.payload,
                isDone: false
            });
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        editTask: (state, action) => {
            const { id, description } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.description = description;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { addTask, toggleTask, editTask, setFilter } = todosSlice.actions;

export const selectTasks = state => {
    switch (state.todos.filter) {
        case 'done':
            return state.todos.tasks.filter(task => task.isDone);
        case 'notDone':
            return state.todos.tasks.filter(task => !task.isDone);
        default:
            return state.todos.tasks;
    }
};

export const selectFilter = state => state.todos.filter;

export default todosSlice.reducer;
