import React from 'react';
import '../styles/Task.css';

const Task = props => {

    const { id, title, priority } = props.task;

    return (
        <li>
            <span className={priority ? 'important' : null}>{title}</span>
            <button onClick={() => props.edit(id)}>Edit</button>
            <button onClick={() => props.delete(id)}>X</button>
        </li>
    );
}

export default Task;