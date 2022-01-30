import './task.css';
import DeleteIcon from './delete.svg';
import DragIcon from './drag-icon.svg';
import { clearNode } from '../utility';

const Task = (() => {
  const EVENTS = {
    deleteTask: 'delete',
    taskStatusChange: 'task-status-change',
  };

  const CSS = {
    deleteIcon: 'task-icon',
    groupLabel: 'group-label',
    checkbox: 'task-checkbox',
    taskName: 'task-name',
    dateLabel: 'task-date',
  };

  function createTask(text, date = '', done = false) {
    let group = null;
    return { text, done, date, group };
  }

  /**
   * Returns a DOM node
   */
  const createNode = (pubsub = null, taskObj) => {
    const container = document.createElement('div');
    const pText = document.createElement('p');
    const ckbox = document.createElement('input');
    const dateLabel = taskObj.date ? document.createElement('p') : null;
    const deleteIcon = new Image();
    const dragIcon = new Image();
    const groupLabel = taskObj.group ? document.createElement('p') : null;

    // add classes
    if (taskObj.group) {
      groupLabel.classList.add(CSS.groupLabel);
      groupLabel.textContent = taskObj.group;
    }
    if (taskObj.date) {
      dateLabel.classList.add(CSS.dateLabel);
      dateLabel.textContent = `Due: ${taskObj.date}`;
    }
    container.classList.add('task');
    dragIcon.classList.add('draggable');
    deleteIcon.classList.add(CSS.deleteIcon);
    ckbox.classList.add(CSS.checkbox);
    pText.classList.add(CSS.taskName);

    // add attributes
    dragIcon.setAttribute('draggable', 'true');
    ckbox.setAttribute('type', 'checkbox');

    pText.textContent = taskObj.text;
    dragIcon.src = DragIcon;
    deleteIcon.src = DeleteIcon;
    dragIcon.addEventListener('dragstart', dragStartHandler);
    dragIcon.addEventListener('dragend', dragEndHandler);
    deleteIcon.addEventListener('click', deleteTaskHandler);
    ckbox.addEventListener('input', inputHandler);

    if (taskObj.done) {
      ckbox.setAttribute('checked', 'true');
      pText.classList.add('done');
    }

    // FUNCTIONS
    function deleteTaskHandler() {
      if (pubsub) {
        pubsub.emit(Task.EVENTS.deleteTask, taskObj.text);
      }
    }
    function inputHandler() {
      taskObj.done = !taskObj.done;
      pubsub.emit(EVENTS.taskStatusChange, taskObj);
      if (taskObj.done) {
        pText.classList.add('done');
      } else {
        pText.classList.remove('done');
      }
    }
    function dragStartHandler(e) {
      container.classList.add('dragging');
      e.dataTransfer.setData('text/plain', pText.textContent);
    }

    function dragEndHandler(e) {
      container.classList.remove('dragging');
    }

    // append
    container.appendChild(dragIcon);
    container.appendChild(ckbox);
    container.appendChild(pText);
    if (dateLabel) {
      container.appendChild(dateLabel);
    }
    if (groupLabel) {
      container.appendChild(groupLabel);
    }
    container.appendChild(deleteIcon);

    return container;
  };

  return { createNode, createTask, EVENTS };
})();

const TaskContainer = (doc, pubsub = null, storage = null) => {
  const TASKS_STORAGE_SLOT = 0;
  const mContainer = doc.createElement('div');
  const container = mContainer; // for exposing
  mContainer.classList.add('task-container');
  let tasks = [];

  render();

  if (pubsub) {
    pubsub.on(Task.EVENTS.taskStatusChange, updateTask);
    pubsub.on(Task.EVENTS.deleteTask, deleteTask);
    pubsub.on('task-change', render);
    pubsub.on('task-moved', moveTask);
    pubsub.on('group-change', (groups) => {
      console.log(groups);
    });
    pubsub.on('selection-change', (groupName) => {
      render(groupName);
    });
  }

  function updateTask(taskObj) {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].text === taskObj.text) {
        tasks[i].done = taskObj.done;
        updateStorage();
      }
    }
  }

  function moveTask(info) {
    const i = tasks.findIndex((e) => e.text === info.taskName);
    if (i > -1) {
      tasks[i].group = info.group;
      updateStorage();
      render();
    }
  }

  function deleteTask(text) {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].text === text) {
        tasks.splice(i, 1);
        updateStorage();
      }
    }
    render();
  }
  /**
   * @param {Task} name
   */
  const addTask = (name, date = '') => {
    const newTask = Task.createTask(name, date);
    tasks.push(newTask);
    updateStorage();
  };

  function render(groupName = null) {
    mContainer.style.display = 'none';

    if (storage) {
      const temp = JSON.parse(storage.get(0));
      if (temp) {
        tasks = temp;
      }
    }
    // don't render if there are no tasks
    clearNode(mContainer);
    for (let i = tasks.length - 1; i > -1; i -= 1) {
      if (groupName !== null && groupName !== 'Show All') {
        if (tasks[i].group !== groupName) {
          continue;
        }
      }
      mContainer.appendChild(Task.createNode(pubsub, tasks[i]));
    }
    if (mContainer.hasChildNodes()) {
      mContainer.style.display = 'flex';
    }
  }

  /**
   * @param {string} text title of task
   * @returns {boolean}
   */
  const contains = (text) => {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].text === text && !tasks[i].done) {
        return true;
      }
    }
    return false;
  };

  function updateStorage() {
    if (storage) {
      storage.add(TASKS_STORAGE_SLOT, JSON.stringify(tasks));
    }
  }

  return { render, addTask, container, contains };
};
export { TaskContainer };
