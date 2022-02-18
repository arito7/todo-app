import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {
  addTask as dbAddTask,
  deleteTask as dbDeleteTask,
  addGroup as dbAddGroup,
  deleteGroup as dbDeleteGroup,
  updateTask as dbUpdateTask,
  db,
} from './firebase/firestore';
import Storage from './components/storage/storage';

const Data = (user) => {
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

  useEffect(() => {
    let unsub = null;
    if (user) {
      const userCollRef = collection(db, user.uid, 'data', 'tasks');
      const q = query(userCollRef);
      unsub = onSnapshot(q, (querySnapshot) => {
        const tempTasks = [];
        querySnapshot.forEach((mDoc) => {
          tempTasks.push(mDoc.data());
        });
        setTasks(tempTasks);
      });
    }
    return unsub;
  }, [user]);

  useEffect(() => {
    let unsub = null;
    if (user) {
      const userGroupRef = collection(db, user.uid, 'data', 'groups');
      const q = query(userGroupRef);
      unsub = onSnapshot(q, (qSnapshot) => {
        const tempGroups = [];
        qSnapshot.forEach((mDoc) => {
          tempGroups.push(mDoc.data());
        });
        setGroups(tempGroups);
      });
    }
    return unsub;
  }, [user]);

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
    if (task.name && !tasks.find((t) => t.name === task.name)) {
      if (user) {
        // if user is signed in
        try {
          dbAddTask(user.uid, task);
        } catch (error) {
          console.error(error);
          return false;
        }
      } else {
        // local storage
        mUpdateTasks(tasks.concat(task));
        return true;
      }
    }
    return false;
  };

  const removeTask = (id) => {
    const i = tasks.findIndex((task) => task.id === id);
    if (i !== -1) {
      if (user) {
        try {
          dbDeleteTask(user.uid, id);
        } catch (error) {
          console.error(error);
        }
      } else {
        const tempTasks = [...tasks];
        tempTasks.splice(i, 1);
        mUpdateTasks(tempTasks);
      }
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
      if (user) {
        try {
          dbAddGroup(user.uid, group);
        } catch (error) {
          console.error(error);
        }
      } else {
        mUpdateGroups(groups.concat(group));
      }
      return true;
    }
    return false;
  };

  const removeGroup = (id) => {
    const i = groups.findIndex((group) => group.id === id);
    if (i !== -1) {
      if (user) {
        try {
          dbDeleteGroup(user.uid, id);
        } catch (error) {
          console.error(error);
        }
      } else {
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
    }
  };

  const setTaskGroup = (id, groupname) => {
    const tasksCopy = [...tasks];
    const task = tasksCopy.find((t) => t.id === id);
    if (task) {
      task.group = groupname;
      if (user) {
        try {
          dbUpdateTask(user.uid, task);
        } catch (error) {
          console.error(error);
        }
      } else {
        mUpdateTasks(tasksCopy);
      }
    }
  };

  const updateTask = (task) => {
    const i = tasks.findIndex((t) => t.id === task.id);
    if (i !== -1) {
      if (user) {
        try {
          dbUpdateTask(user.uid, task);
        } catch (error) {
          console.error(error);
        }
      } else {
        const tasksCopy = [...tasks];
        tasksCopy[i] = task;
        mUpdateTasks(tasksCopy);
      }
    }
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
