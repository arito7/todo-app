import './task.css';
import DeleteIcon from './delete.svg';
/**
 * @param {string} text 
 * @returns a Task object
 */
const Task = (text)=>{
    let _text = text;
    let _done = false;
    const type = 'task'
    const content = _text;

    /**
     * Returns a DOM node
     * @param {document} doc 
     */
    const createNode = (doc, pubsub = null) => {
        const container = doc.createElement('div');
        container.classList.add('task');

        const text = doc.createElement('p');
        text.textContent = _text;

        const ckbox = doc.createElement('input');
        ckbox.setAttribute('type', 'checkbox');

        const deleteIcon = new Image()
        deleteIcon.src = DeleteIcon;
        deleteIcon.addEventListener('click',()=>{
            if (pubsub){
                pubsub.emit('delete', _text);
            }
        });
        if (_done){
            ckbox.setAttribute('checked', 'true');
            text.classList.add('done');
        }
        ckbox.addEventListener('input', ()=>{
            console.log('triggered')
            _done = !_done;
            if (_done){
                text.classList.add('done');
            } else {
                text.classList.remove('done');
            }
        })

        container.appendChild(ckbox);
        container.appendChild(text);
        container.appendChild(deleteIcon);

        return container;
    }
     
    return {createNode, type, content};
};

const TaskContainer = (doc, pubsub = null) => {
    const _container = doc.createElement('div');
    _container.classList.add('task-container');
    const _tasks = [];

    if(pubsub){
        pubsub.on('delete',deleteTask)
    }

    function deleteTask(text){
        for(let i = 0; i < _tasks.length; i++){
            if (_tasks[i].content === text){
                _tasks.splice(i, 1);
            }
        }
        render();
    }
    /**
     * @param {Task} task 
     */
    const addTask = (task) => {
        if(task.type === 'task'){
            _tasks.push(task);
        } else {
            console.log('Not a task type')
        }
    };

    function _resetContainer() {
        while(_container.hasChildNodes()){
            _container.removeChild(_container.firstChild)
        }
    }

    const render = () => {
        _resetContainer();
        for(let i = 0; i < _tasks.length; i++){
            _container.appendChild(_tasks[i].createNode(doc, pubsub || null));
            // dont add a hr after last task
            if(i != _tasks.length - 1){
                _container.appendChild(doc.createElement('hr'));
            }
        }
    };

    /**
     * @param {string} text title of task 
     * @returns {boolean}
     */
    const contains = (text) => {
        for (let task of _tasks){
            if (task.content === text){
                return true;
            }
        }
    }

    const container = _container;

    return {render, addTask, container, contains}
}
export {Task, TaskContainer};