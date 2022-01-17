import './sidebar.css';
import { InputBarComponent } from '../input-bar/input-bar';
import { clearNode } from '../utility';

const Sidebar = (pubsub = null, storage = null)=>{
    let _groups = [];
    const GROUPS_STORAGE_SLOT = 1;
    // create DOM elements
    const container = document.createElement('div');
    const menuItemContainer = document.createElement('div');
    const inputbar = InputBarComponent();

    render();
    // add classes
    container.classList.add('sidebar');
    menuItemContainer.classList.add('menu-item-container');

    inputbar.btn.textContent = 'Create New Group';
    inputbar.setPlaceholderText('New Group');
    inputbar.btn.addEventListener('click',()=>{
        if(addMenuItem(inputbar.textarea.value)){
            inputbar.textarea.value = '';
        };
    })
    inputbar.msg.textContent = 'Group already exists!';
    inputbar.setMsgShowCondition(()=>{
        return _groups.includes(inputbar.textarea.value); 
    })
    function render(){
        if(storage){
            _groups = JSON.parse(storage.get(GROUPS_STORAGE_SLOT));
        }
        clearNode(menuItemContainer);
        for (let i = _groups.length - 1; i > -1; i--){
            const c = document.createElement('div');
            c.classList.add('menu-item');
            const text = document.createElement('h5');
            text.classList.add('menu-item-name');
            text.textContent = _groups[i];
            c.appendChild(text);
            menuItemContainer.appendChild(c);            
        }
    }
    
    function addMenuItem(title){
        if (inputbar.textarea.value !== '' && !_groups.includes(inputbar.textarea.value)){
            _groups.push(title);
            if(storage){
                storage.add(GROUPS_STORAGE_SLOT, JSON.stringify(_groups));
            }
            if(pubsub){
                pubsub.emit('groups-changed', _groups.slice());
            }
            render();
            return true
        }
    }
    
    // append
    container.appendChild(inputbar.node);
    container.appendChild(menuItemContainer);
    
    return container;
}
export {Sidebar}