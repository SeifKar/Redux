import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, selectFilter, setFilter } from '../features/todos/todosSlice';
import Task from './Task';

const ListTask = () => {
    const tasks = useSelector(selectTasks);
    const currentFilter = useSelector(selectFilter);
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{ margin: '20px 0' }}>
                <label>Filter: </label>
                <select 
                    value={currentFilter}
                    onChange={(e) => dispatch(setFilter(e.target.value))}
                    style={{ marginLeft: '10px' }}
                >
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="notDone">Not Done</option>
                </select>
            </div>
            <div>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        {...task}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListTask;
