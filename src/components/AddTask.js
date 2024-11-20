import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/todos/todosSlice';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            dispatch(addTask(description));
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter new task..."
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
