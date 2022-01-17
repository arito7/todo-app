import './sidebar.css';
import { InputBarComponent } from '../input-bar/input-bar';
import { clearNode } from '../utility';
import RemoveIcon from './remove.svg';

/**
 * Events:
 *  'group-change' : triggers when a group is added/removed
 *  'selection-change' : triggers when side bar selection changes
 * @param {} pubsub 
 * @param {} storage 
 * @returns 
 */

const Sidebar = (pubsub = null, storage = null)=>{
    const CSS = {
        selected: 'selected',
        sidebar: 'sidebar',
        showAll: 'show-all',
        menuItem: 'menu-item',
    }
    const EVENTS = {
        groupUpdated: 'group-updated',
        selectionChange: 'selection-change',
    }
    const UI = {
        showAllBtn: 'Show All',
        createNewGroupBtn: 'Create New Group',
        warningMsg: 'Group already exists!',
        inputBarPlaceholder: 'New Group'
    }
    let _groups = [];
    const GROUPS_STORAGE_SLOT = 1;

    // create DOM elements
    const container = document.createElement('div');
    const menuItemContainer = document.createElement('div');
    const inputbar = InputBarComponent();
    const showAllBtn = document.createElement('div');
    
    render();

    // add classes
    showAllBtn.classList.add(CSS.showAll);
    showAllBtn.classList.add(CSS.menuItem)
    container.classList.add(CSS.sidebar);
    menuItemContainer.classList.add('menu-item-container');

    showAllBtn.textContent = UI.showAllBtn;
    showAllBtn.addEventListener('click',()=>{clickListener(showAllBtn)});
    inputbar.btn.textContent = UI.createNewGroupBtn;
    inputbar.setPlaceholderText(UI.inputBarPlaceholder);
    inputbar.btn.addEventListener('click',()=>{
        if(addMenuItem(inputbar.textarea.value)){
            inputbar.textarea.value = '';
            inputbar.btn.toggle();
        };
    })
    inputbar.msg.textContent = UI.warningMsg;
    inputbar.setMsgShowCondition(()=>{
        return _groups.includes(inputbar.textarea.value); 
    })

    function render(){
        clearNode(menuItemContainer);
        
        if(!document.querySelector('#selected')){
            showAllBtn.id = 'selected';
        }

        if(storage){
            const temp = JSON.parse(storage.get(GROUPS_STORAGE_SLOT));
            if(temp){
                _groups = temp;
            }
        }

        for (let i = _groups.length - 1; i > -1; i--){
            const c = document.createElement('div');
            const text = document.createElement('h5');
            const remove = new Image();
            
            c.classList.add(CSS.menuItem);
            text.classList.add('menu-item-name');
            remove.classList.add('icon-button');
            
            remove.src = RemoveIcon;
            text.textContent = _groups[i];
            c.addEventListener('drop', dropHandler);
            c.addEventListener('click', () => {clickListener(c)});
            c.addEventListener('dragleave', () => {dragLeaveHandler(c)});
            c.addEventListener('dragover', () => {dragoverHandler(c)});
            remove.addEventListener('click',() =>{
                removeGroup(i);
                render();
            });
            
            c.appendChild(text);            
            c.appendChild(remove);
            menuItemContainer.appendChild(c);            
        }
    }
    function clickListener(src){
        const currentSelection = document.querySelector('#selected');
        if (currentSelection === src){ return }
        if(currentSelection){
            currentSelection.id = '';
        }
        src.id = 'selected';
        if (pubsub) {
            pubsub.emit(EVENTS.selectionChange, src.textContent)
            console.log(src.textContent)
        }
    }
    function dragoverHandler(src){
        // e.preventDefault();
        src.id = 'dragged-over';
    }
    
    function dragLeaveHandler(src){
        src.id = '';
    }

    function dropHandler(e) {
        e.preventDefault();
        if(pubsub){
            const taskName = e.dataTransfer.getData('text/plain');
            const group = e.target.textContent;
            pubsub.emit('task-moved', {taskName, group});
        }
    }
    
    function removeGroup(index){
        _groups.splice(index, 1);
        updateStorage();
        if (pubsub){
            pubsub.emit(EVENTS.groupUpdated, _groups)
        }
    }

    function addGroup(title){
        _groups.push(title);
        updateStorage();
        if(pubsub){
            pubsub.emit(EVENTS.groupUpdated, _groups);
        }
    }

    function updateStorage(){
        if(storage){
            storage.add(GROUPS_STORAGE_SLOT, JSON.stringify(_groups));
        }
    }

    function addMenuItem(title){
        if (inputbar.textarea.value !== '' && !_groups.includes(inputbar.textarea.value)){
            addGroup(title);
            render();
            return true
        }
    }
    
    // append
    container.appendChild(inputbar.node);
    container.appendChild(showAllBtn);
    container.appendChild(menuItemContainer);
    
    return container;
}
export {Sidebar}