import './input-bar.css';
import { setAttributes } from '../utility';

const InputBarComponent = (enableDate = false)=>{

    const CSS = {
        dateContainer: 'input-bar-date-container',
        date: 'input-bar-date',
        dateLabel: 'input-bar-date-label',
        addbtn: 'input-bar-btn',
        dateAddbtnContainer: 'input-bar-date-btn-container'
    }

    // create DOM elements
    const node = document.createElement('div');
    const textarea = document.createElement('input');
    const btn = document.createElement('button');
    const msg = document.createElement('p');
    const dateAddbtnContainer = document.createElement('div');
    if(enableDate){
        const date = document.createElement('input');
        const label = document.createElement('label')
        label.classList.add(CSS.dateLabel);
        date.classList.add(CSS.date);
        date.id = 'date';
        
        label.setAttribute('for', 'date');
        label.textContent = 'Due Date';
        setAttributes(date, {
            type: 'date',
        })
        dateAddbtnContainer.appendChild(label);
        dateAddbtnContainer.appendChild(date);
    }
    dateAddbtnContainer.show = () => {
        dateAddbtnContainer.style.display = 'flex';
    }
    dateAddbtnContainer.hide = () => {
        dateAddbtnContainer.style.display = 'none';
    }
    function getDate(){
        if(enableDate){
            return date.value;
        }
    }
    // add classes
    node.classList.add('textbar');
    textarea.classList.add('textbar-content');
    msg.classList.add('exists-msg');
    btn.classList.add(CSS.addbtn)
    dateAddbtnContainer.classList.add(CSS.dateAddbtnContainer)

    // default attributes
    setAttributes(textarea, {
        type: 'text',
        maxlength: '40',
        placeholder: 'New Task',
        size: '40',
        minlength: '1',
        spellcheck: 'true',
        autocorrect: 'on'
    })

    const setMsgShowCondition = (fn) => {
        const condition = () => msg.style.display = fn() ? 'block' : 'none';
       
        textarea.addEventListener('input',()=>{
            condition();
        });
        btn.addEventListener('click', ()=>{
            condition();
        })
    }

    const setPlaceholderText = (text) => {
        textarea.setAttribute('placeholder', text);
    };

    btn.addEventListener('click',()=>{
        if(!textarea.value){
            dateAddbtnContainer.hide()
        }
    })

    textarea.addEventListener('input', e => {
        if(e.target.value){
            dateAddbtnContainer.show();
        } else {
            dateAddbtnContainer.hide();
        }
    });

    // append
    node.appendChild(textarea);
    dateAddbtnContainer.appendChild(btn);
    node.appendChild(dateAddbtnContainer);
    node.appendChild(msg);
    
    return {node, textarea, btn, msg, setPlaceholderText, setMsgShowCondition, getDate};
};

export {InputBarComponent}