import { useState } from 'react';
import Storage from './components/storage/storage';

const Data = () => {
  const storage = Storage();
  const TASKS_KEY = 2;
  const GROUPS_KEY = 3;
  const [tasks, setTasks] = useState(() => {
    const temp = JSON.parse(storage.get(TASKS_KEY));
    if (temp) {
      return temp;
    }
    return [];
  });
  const [groups, setGroups] = useState(() => {
    const temp = JSON.parse(storage.get(GROUPS_KEY));
    if (temp) {
      return temp;
    }
    return [];
  });

  const mUpdateTasks = (t) => {
    storage.add(TASKS_KEY, JSON.stringify(t));
    setTasks(JSON.parse(storage.get(TASKS_KEY)));
  };

  const mUpdateGroups = (g) => {
    storage.add(GROUPS_KEY, JSON.stringify(g));
    setGroups(JSON.parse(storage.get(GROUPS_KEY)));
  };

  /**
   * Checks whether a task with the same name already exists.
   * If it does it will not be added and false will be returned
   * @param {task object} task
   * @returns {Boolean} true on successful add, false otherwise
   */
  const addTask = (task) => {
    if (task.name !== '' && !tasks.find((t) => t.name === task.name)) {
      mUpdateTasks(tasks.concat(task));
      return true;
    }
    return false;
  };

  const removeTask = (id) => {
    const i = tasks.findIndex((task) => task.id === id);
    if (i !== -1) {
      const tempTasks = [...tasks];
      tempTasks.splice(i, 1);
      mUpdateTasks(tempTasks);
    }
  };

  /**
   * Checks whether a group with the same name already exists.
   * If it does it will not be added and will return false
   * @param {group object} group
   * @returns {Boolean} true on successful add, false otherwise
   */
  const addGroup = (group) => {
    if (group.name !== '' && !groups.find((g) => g.name === group.name)) {
      mUpdateGroups(groups.concat(group));
      return true;
    }
    return false;
  };

  const removeGroup = (id) => {
    const i = groups.findIndex((group) => group.id === id);
    if (i !== -1) {
      const tasksCopy = [...tasks];
      const groupsCopy = [...groups];
      const removedGroup = groupsCopy.splice(i, 1);
      tasksCopy.forEach((t) => {
        if (t.group === removedGroup[0].name) {
          t.group = '';
        }
      });
      mUpdateTasks(tasksCopy);
      mUpdateGroups(groupsCopy);
    }
  };

  const setTaskGroup = (id, groupname) => {
    const tasksCopy = [...tasks];
    const task = tasksCopy.find((t) => t.id === id);
    if (task) {
      task.group = groupname;
    }
    mUpdateTasks(tasksCopy);
  };

  const updateTask = (task) => {
    const i = tasks.findIndex((t) => t.id === task.id);
    const tasksCopy = [...tasks];
    if (i !== -1) {
      tasksCopy[i] = task;
    }
    mUpdateTasks(tasksCopy);
  };

  return {
    tasks,
    groups,
    addTask,
    removeTask,
    addGroup,
    removeGroup,
    setTaskGroup,
    updateTask,
  };
};

export default Data;
