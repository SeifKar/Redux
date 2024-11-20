import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../features/todos/todosSlice';

const Task = ({ id, description, isDone }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleToggle = () => {
        dispatch(toggleTask(id));
    };

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editTask({ id, description: editedDescription }));
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="task" style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
            <input
                type="checkbox"
                checked={isDone}
                onChange={handleToggle}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    style={{ flex: 1 }}
                />
            ) : (
                <span style={{ 
                    textDecoration: isDone ? 'line-through' : 'none',
                    flex: 1
                }}>
                    {description}
                </span>
            )}
            <button onClick={handleEdit}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </div>
    );
};

export default Task;
