import React from 'react';
import Task from './Task';
import '../styles/TaskList.css';

const TaskList = props => {

    const list = props.tasks.map(task => (
        <Task key={task.id} task={task} delete={props.delete} edit={props.edit} />
    ));

    return (
        <div className="list">
            <ul>
                {list.length > 0 ? list : "You have no tasks..."}
            </ul>
        </div>
    );
}

export default TaskList;