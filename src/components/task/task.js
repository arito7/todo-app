import './task.css';
import DeleteIcon from './delete.svg';
/**
 * @param {string} text 
 * @returns a Task object
 */
const Task = (()=>{

    function createTask(text, done = false){
        this.group = null;
        return { text, done, group}
    }

    /**
     * Returns a DOM node
     * @param {document} doc 
     */
    const createNode = (doc, pubsub = null, taskObj) => {
        const container = doc.createElement('div');
        container.classList.add('task');

        const pText = doc.createElement('p');
        pText.textContent = taskObj.text;

        const ckbox = doc.createElement('input');
        ckbox.setAttribute('type', 'checkbox');

        const deleteIcon = new Image()
        deleteIcon.src = DeleteIcon;
        deleteIcon.addEventListener('click',()=>{
            if (pubsub){
                pubsub.emit('delete', taskObj.text);
            }
        });
        if (taskObj.done){
            ckbox.setAttribute('checked', 'true');
            pText.classList.add('done');
        }
        ckbox.addEventListener('input', ()=>{
            taskObj.done = !taskObj.done;
            if (taskObj.done){
                pText.classList.add('done');
            } else {
                pText.classList.remove('done');
            }
        })

        container.appendChild(ckbox);
        container.appendChild(pText);
        container.appendChild(deleteIcon);
        
        return container;
    }
    
    return {createNode, createTask};
})();

const TaskContainer = (doc, pubsub = null, storage = null) => {
    const TASKS_STORAGE_SLOT = 0;
    const _container = doc.createElement('div');
    const container = _container; // for exposing
    _container.classList.add('task-container');
    let _tasks = [];
    (()=>{
        if(localStorage){
            _tasks = JSON.parse(storage.get(TASKS_STORAGE_SLOT));
            render();
        }
    })()
    if(pubsub){
        pubsub.on('delete', deleteTask);
        pubsub.on('task-change', render);
    }

    function deleteTask(text){
        for(let i = 0; i < _tasks.length; i++){
            if (_tasks[i].text === text){
                _tasks.splice(i, 1);
                updateLocalStorage();
            }
        }
        render();
    }
    /**
     * @param {Task} task 
     */
    const addTask = (task) => {
        const newTask = Task.createTask(task);
        _tasks.push(newTask);
        updateLocalStorage();
    };

    function _resetContainer() {
        while(_container.hasChildNodes()){
            _container.removeChild(_container.firstChild)
        }
    }
    
    function render(){
        // don't render if there are no tasks
        if(_tasks.length === 0){
            _container.style.display = 'none';
            return
        } else {
            _resetContainer();
            if(storage){
                _tasks = JSON.parse(storage.get(0));
            }
            for(let i = _tasks.length - 1; i > -1; i--){
                _container.appendChild(Task.createNode(doc, pubsub, _tasks[i]));
                // dont add a hr after last task
                if(i != 0){
                    _container.appendChild(doc.createElement('hr'));
                }
            }
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
    
    
    function updateLocalStorage(){
        if(storage){
            storage.add(TASKS_STORAGE_SLOT, JSON.stringify(_tasks));
        }
    }
    
    return {render, addTask, container, contains}
}
export {TaskContainer};