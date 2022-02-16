import React, { useState } from 'react';
import './task.css';
import { MdDragIndicator, MdDelete } from 'react-icons/md';

const Task = (props) => {
  const { onRemove, onCompletion, task } = props;
  const onCheckChange = (e) => {
    onCompletion({ ...task, done: e.target.checked });
  };
  return (
    <div
      draggable
      className="task"
      onDragStart={(e) => {
        e.dataTransfer.setData('taskid', task.id);
      }}
    >
      <MdDragIndicator className="draggable btn drag-indicator" />
      <input
        type="checkbox"
        name=""
        id=""
        checked={task.done}
        onChange={onCheckChange}
      />
      <p className={task.done ? 'done' : ''}>{task.name}</p>
      {!!task.group ? <p className="group-label">{task.group}</p> : null}
      {!!task.date ? (
        <div className="date">
          <span>Due Date: </span>
          <span>{task.date}</span>
        </div>
      ) : null}
      <MdDelete
        className="btn delete"
        id={task.id}
        onClick={() => {
          onRemove(task.id);
        }}
      />
    </div>
  );
};

export default Task;
