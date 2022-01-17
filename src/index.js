import { headerComponent } from "./components/header/header";
import { PubSub } from "./components/pubsub";
import { TaskContainer } from "./components/task/task";
import { Storage } from "./components/storage/storage";
import { Sidebar } from "./components/sidebar/sidebar";
import { InputBarComponent } from "./components/input-bar/input-bar";
import './index.css';

(()=>{    
    const pubsub = PubSub();
    const storage = Storage();

    const inputBar = InputBarComponent();
    inputBar.setPlaceholderText('New Task');
    inputBar.btn.textContent = 'Add Task'
    inputBar.msg.textContent = 'Task already exists!'
    inputBar.btn.addEventListener('click', ()=>{
        if (!tasksContainer.contains(inputBar.textarea.value)){
            tasksContainer.addTask(inputBar.textarea.value);   
            pubsub.emit('task-change');
            inputBar.textarea.value = '';
            inputBar.btn.toggle();
            inputBar.msg.style.display = 'none';
        } else {
            inputBar.msg.style.display = 'block';
        }
    })
    
    const body = document.querySelector('body');
    const container = document.createElement('div'); // holds sidebar and main content
    container.classList.add('container');
    const content = document.createElement('div'); // holds main content
    content.classList.add('content');
    const header = headerComponent(document);
    const sidebar = Sidebar(pubsub, storage);
    
    const tasksContainer = TaskContainer(document, pubsub, storage);
    
    content.appendChild(inputBar.node);
    content.appendChild(tasksContainer.container);
    container.appendChild(sidebar);
    container.appendChild(content);
    body.appendChild(header);
    body.appendChild(container);
    
    
    
})();