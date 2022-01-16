import { headerComponent } from "./components/header/header";
import { PubSub } from "./components/pubsub";
import { Task, TaskContainer} from "./components/task/task";
import './index.css';

(()=>{    
    const pubsub = PubSub();

    const inputBar = (()=>{
        const inputBar = document.createElement('div');
        inputBar.classList.add('textbar');
        const textarea = document.createElement('input');
        const btntextarea = document.createElement('button');
        btntextarea.textContent = 'Add Task';
        setAttributes(textarea, {
            type: 'text',
            maxlength: '40',
            placeholder: 'New Task',
            size: '40',
            minlength: '1',
            spellcheck: 'true',
            autocorrect: 'on'
        })
        btntextarea.toggle = (e) => {
            console.log(e == true)
            if(e){
                btntextarea.style.display = e.target.value !== '' ? 'block' : 'none';
            } else {
                btntextarea.style.display = btntextarea.style.display === 'block' ? 'none' : 'block';
            }
        }
        textarea.addEventListener('input', e =>{
            btntextarea.toggle(e);
        });
        btntextarea.addEventListener('click', ()=>{
            if (!tasksContainer.contains(textarea.value)){
                tasksContainer.addTask(Task(textarea.value))   
                pubsub.emit('task-change');
                textarea.value = '';
                btntextarea.toggle();
                existsMsg.style.display = 'none';
            } else {
                existsMsg.style.display = 'block';
            }
        })
        const existsMsg = document.createElement('p');
        existsMsg.textContent = 'This task already exists!';
        existsMsg.classList.add('exists-msg');

        textarea.classList.add('textbar-content');
        inputBar.appendChild(textarea);
        inputBar.appendChild(btntextarea);
        inputBar.appendChild(existsMsg);
        
        return inputBar;
    })();

    const body = document.querySelector('body');
    const container = document.createElement('div');
    const header = headerComponent(document);
    container.classList.add('container');
    
    const tasksContainer = TaskContainer(document, pubsub);
    
    container.appendChild(inputBar);
    container.appendChild(tasksContainer.container);
    body.appendChild(header);
    body.appendChild(container);
    
    function setAttributes(domElement, attributes){
        for (let attr in attributes){
            domElement.setAttribute(attr, attributes[attr]);
        }
    }
    
})();