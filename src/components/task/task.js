import './task.css';
import DeleteIcon from './delete.svg';
import DragIcon from './drag-icon.svg';
import { clearNode } from '../utility';

const Task = (()=>{

    const EVENTS = {
        deleteTask: 'delete',
        taskStatusChange: 'task-status-change',
    }

    const CSS = {
        deleteIcon: 'task-icon',
        groupLabel: 'group-label',
        checkbox: 'task-checkbox',
        taskName: 'task-name',
        dateLabel: 'task-date',
    }

    function createTask(text, date = '', done = false){
        let group = null;
        return { text, done, date, group}
    }

    /**
     * Returns a DOM node
     */
    const createNode = (pubsub = null, taskObj) => {
        const container = document.createElement('div');
        const pText = document.createElement('p');
        const ckbox = document.createElement('input');
        const dateLabel = taskObj.date ? document.createElement('p') : null;
        const deleteIcon = new Image()
        const dragIcon = new Image()
        const groupLabel = taskObj.group ? document.createElement('p') : null;

        // add classes
        if(taskObj.group){
            groupLabel.classList.add(CSS.groupLabel)
            groupLabel.textContent = taskObj.group;
        }
        if (taskObj.date) { 
            dateLabel.classList.add(CSS.dateLabel) 
            dateLabel.textContent = `Due: ${taskObj.date}`;
        };
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
        
        if (taskObj.done){
            ckbox.setAttribute('checked', 'true');
            pText.classList.add('done');
        }

        // FUNCTIONS 
        function deleteTaskHandler(){
            if (pubsub){
                pubsub.emit(Task.EVENTS.deleteTask, taskObj.text);
            }
        };
        function inputHandler(){
            taskObj.done = !taskObj.done;
            pubsub.emit(EVENTS.taskStatusChange, taskObj);
            if (taskObj.done){
                pText.classList.add('done');
            } else {
                pText.classList.remove('done');
            }
        }
        function dragStartHandler(e){
            console.log('drag started')
            container.classList.add('dragging');
            e.dataTransfer.setData('text/plain', pText.textContent);
        }

        function dragEndHandler(e){
            console.log('drag ended')
            container.classList.remove('dragging');
        }

        // append
        container.appendChild(dragIcon);
        container.appendChild(ckbox);
        container.appendChild(pText);
        if (dateLabel) { container.appendChild(dateLabel) };
        if (groupLabel) { container.appendChild(groupLabel) };
        container.appendChild(deleteIcon);

        return container;
    }
    
    return {createNode, createTask, EVENTS};
})();

const TaskContainer = (doc, pubsub = null, storage = null) => {
    const TASKS_STORAGE_SLOT = 0;
    const _container = doc.createElement('div');
    const container = _container; // for exposing
    _container.classList.add('task-container');
    let _tasks = [];

    render();
    
    if(pubsub){
        pubsub.on(Task.EVENTS.taskStatusChange, updateTask)
        pubsub.on(Task.EVENTS.deleteTask, deleteTask);
        pubsub.on('task-change', render);
        pubsub.on('task-moved', moveTask);
        pubsub.on('group-change', groups => {
            console.log(groups);
        })
        pubsub.on('selection-change', (groupName) => {
            render(groupName);
        })
    }
    
    function updateTask(taskObj){
        for(let task of _tasks){
            if(task.text === taskObj.text){
                task.done = taskObj.done;
                updateStorage();
            }
        }
    }
    function moveTask(info){
        console.log(info);
        const i = _tasks.findIndex( e => e.text === info.taskName );
        if (i > -1) {
            _tasks[i].group = info.group;
            updateStorage();
            render();
        }
    }

    function deleteTask(text){
        for(let i = 0; i < _tasks.length; i++){
            if (_tasks[i].text === text){
                _tasks.splice(i, 1);
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
        _tasks.push(newTask);
        updateStorage();
    };
    
    function render(groupName = null){
        _container.style.display = 'none';
        
        if(storage){
            const temp = JSON.parse(storage.get(0));
            if(temp){
                _tasks = temp;
            }
        }
        // don't render if there are no tasks
        clearNode(_container);
        for(let i = _tasks.length - 1; i > -1; i--){
            if (groupName !== null && groupName !== 'Show All'){
                if(_tasks[i].group !== groupName){
                    continue;
                }
            }
            _container.appendChild(Task.createNode(pubsub, _tasks[i]));
        }
        if(_container.hasChildNodes()){
            _container.style.display = 'flex';
        }
    };
    
    /**
     * @param {string} text title of task 
     * @returns {boolean}
     */
    const contains = (text) => {
        for (let task of _tasks){
            if (task.text === text && !task.done){
                return true;
            }
        }
    }
    
    function updateStorage(){
        if(storage){
            storage.add(TASKS_STORAGE_SLOT, JSON.stringify(_tasks));
        }
    }
    
    return {render, addTask, container, contains}
}
export {TaskContainer};