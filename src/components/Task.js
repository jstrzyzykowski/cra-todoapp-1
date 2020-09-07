import React from 'react';
import '../styles/Task.css';

const Task = props => {

    const { id, title, important, date } = props.task;

    return (
        <li>
            <div className="main">
                <p className={important ? 'title important' : 'title'}>{title}</p>
                <p>Term: <span className="term">{date}</span></p>
            </div>
            <div className="buttons">
                <button className="edit-btn" onClick={() => props.edit(id)}>
                    <i className="fas fa-edit"></i>
                </button>
                <button className="delete-btn" onClick={() => props.delete(id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li >
    );
}

export default Task;