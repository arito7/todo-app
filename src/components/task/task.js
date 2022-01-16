import './task.css';

/**
 * @param {string} text 
 * @returns a Task object
 */
const Task = (text)=>{
    let _text = text;
    const type = 'task'
    let _done = false;
    /**
     * Returns a DOM node
     * @param {document} doc 
     */
    const createNode = (doc) => {
        const container = doc.createElement('div');
        container.classList.add('task');

        const text = doc.createElement('p');
        text.textContent = _text;

        const ckbox = doc.createElement('input');
        ckbox.setAttribute('type', 'checkbox');
        if(_done){
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
        container.appendChild(text);
        container.appendChild(ckbox);
        return container;
    }
     
    const content = _text;
    return {createNode, type, content};
};

const TaskContainer = (doc) => {
    const _container = doc.createElement('div');
    _container.classList.add('task-container');
    const _tasks = [];

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

    const render = ()=>{
        _resetContainer();
        for(let i = 0; i < _tasks.length; i++){
            _container.appendChild(_tasks[i].createNode(doc));
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