import './input-bar.css';
import { setAttributes } from '../utility';

const InputBarComponent = ()=>{
    // create DOM elements
    const node = document.createElement('div');
    const textarea = document.createElement('input');
    const btn = document.createElement('button');
    const msg = document.createElement('p');
    
    // add classes
    node.classList.add('textbar');
    textarea.classList.add('textbar-content');
    msg.classList.add('exists-msg');

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

    btn.toggle = (e) => {
        if(e){
            btn.style.display = e.target.value !== '' ? 'block' : 'none';
        } else {
            btn.style.display = btn.style.display === 'block' ? 'none' : 'block';
        }
    }

    textarea.addEventListener('input', e => {
        btn.toggle(e);
    });

    // append
    node.appendChild(textarea);
    node.appendChild(btn);
    node.appendChild(msg);
    
    return {node, textarea, btn, msg, setPlaceholderText, setMsgShowCondition};
};

export {InputBarComponent}