import React, { useEffect, useState } from 'react';
import './main.css';
import Task from './task/task';
import uniqid from 'uniqid';
const Main = (props) => {
  const { data, selectedGroup } = props;
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');
  const [showNoTasks, setShowNoTasks] = useState(false);

  useEffect(() => {
    setShowNoTasks(() => {
      if (selectedGroup) {
        const filtered = data.tasks.filter(
          (task) => task.group === selectedGroup
        );
        return filtered.length === 0;
      }
      return false;
    });
  }, [selectedGroup]);

  const onAddTask = () => {
    data.addTask({ id: uniqid(), name: input, done: false, date });
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
        {showNoTasks ? <NoTasks /> : null}
        {data.tasks
          .filter((task) => {
            if (selectedGroup) {
              return selectedGroup === task.group;
            }
            return true;
          })
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

const NoTasks = () => {
  return (
    <div className="no-tasks">
      <p> No Tasks have been assigned to this group yet.</p>
    </div>
  );
};

export default Main;
