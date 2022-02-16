import Header from './components/header/header';
import { PubSub } from './components/pubsub';
import { TaskContainer } from './components/task/task';
import { Storage } from './components/storage/storage';
import { Sidebar } from './components/sidebar/sidebar';
import { InputBarComponent } from './components/input-bar/input-bar';
import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
(() => {
  const pubsub = PubSub();
  const storage = Storage();

  const inputBar = InputBarComponent(true);
  inputBar.setPlaceholderText('New Task');
  inputBar.btn.textContent = 'Add Task';
  inputBar.msg.textContent = 'Task already exists!';
  inputBar.btn.addEventListener('click', () => {
    if (!tasksContainer.contains(inputBar.textarea.value)) {
      tasksContainer.addTask(inputBar.textarea.value, inputBar.getDate());
      pubsub.emit('task-change');
      inputBar.textarea.value = '';
      inputBar.msg.style.display = 'none';
    } else {
      inputBar.msg.style.display = 'block';
    }
  });
  inputBar.setMsgShowCondition(() => {
    return tasksContainer.contains(inputBar.textarea.value);
  });

  const body = document.querySelector('body');
  const root = document.createElement('div');
  root.id = 'root';
  body.appendChild(root);
  ReactDOM.render(<Header />, root);
  const container = document.createElement('div'); // holds sidebar and main content
  container.classList.add('container');
  const content = document.createElement('div'); // holds main content
  content.classList.add('content');
  const sidebar = Sidebar(pubsub, storage);

  addEventListener('drop', (e) => {
    console.log(e);
  });

  const tasksContainer = TaskContainer(document, pubsub, storage);

  content.appendChild(inputBar.node);
  content.appendChild(tasksContainer.container);
  container.appendChild(sidebar);
  container.appendChild(content);
  body.appendChild(container);
})();
