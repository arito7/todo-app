import React, { useState } from 'react';
import './main.css';
import Task from './task/task';
import uniqid from 'uniqid';
const Main = (props) => {
  const { data, selectedGroup } = props;
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');

  const onAddTask = () => {
    data.addTask({ id: uniqid(), name: input, done: false, date });
    console.log(data.tasks);
    setInput('');
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const onRemoveTask = (id) => {
    data.removeTask(id);
  };

  const onTaskCompletion = (task) => {
    data.updateTask(task);
  };

  return (
    <div className="main">
      <div className="head">
        <input
          type="text"
          value={input}
          placeholder="New Task"
          onChange={onInputChange}
        />
        <input type="date" name="" id="" onChange={onDateChange} />
        <button onClick={onAddTask}>Add Task</button>
      </div>
      <div className="tasks">
        {data.tasks
          .filter(
            (task) => selectedGroup === '' || task.group === selectedGroup
          )
          .map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onRemove={onRemoveTask}
                onCompletion={onTaskCompletion}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Main;
