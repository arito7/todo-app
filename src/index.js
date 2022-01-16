import { headerComponent } from "./components/header/header";
import { noteComponent } from "./components/note/note";
import { noteContainerComponent } from "./components/note-container/note-container";
import { PubSub } from "./components/pubsub";
import { Task, TaskContainer} from "./components/task/task";
import './index.css';

(()=>{
    function setAttributes(domelement, attributes){
        for (let attr in attributes){
            domelement.setAttribute(attr, attributes[attr]);
        }
    }
    
    const pubsub = PubSub();
    const body = document.querySelector('body');
    const container = document.createElement('div');
    const header = headerComponent(document);
    container.classList.add('container');

    const textbar = document.createElement('div');
    textbar.classList.add('textbar');
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
    textarea.addEventListener('input', e =>{
        btntextarea.style.display = e.target.value !== '' ? 'block' : 'none';
    });

    btntextarea.addEventListener('click', ()=>{
        if (!tasksContainer.contains(textarea.value)){
            tasksContainer.addTask(Task(textarea.value))   
            tasksContainer.render();     
            textarea.value = '';
        }
    })

    const tasksContainer = TaskContainer(document);

    
    textarea.classList.add('textbar-content');
    textbar.appendChild(textarea);
    textbar.appendChild(btntextarea);
    // const noteContainer = noteContainerComponent(document);
    // for (let i = 0; i < 6; i++){
    //     const note = noteComponent('Yessuru');
    //     noteContainer.appendChild(note.createNode(document));
    // }

    // const btn = document.createElement('button');
    // btn.textContent = 'testeru masseru';
    // btn.addEventListener('click', ()=>{
    //     pubsub.emit('woah', 'superduperdata');
    // })
    // pubsub.on('woah',value => {console.log(value)});
    // container.appendChild(btn)
    container.appendChild(textbar);
    container.appendChild(tasksContainer.container);
    // container.appendChild(noteContainer);
    body.appendChild(header);
    body.appendChild(container);

    
})();