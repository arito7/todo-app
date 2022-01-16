import { headerComponent } from "./components/header/header";
import { noteComponent } from "./components/note/note";
import './index.css';
(()=>{
    const body = document.querySelector('body');
    const container = document.createElement('div');
    const header = headerComponent(document);
    container.classList.add('container');

    const note = noteComponent(document);
    container.appendChild(note);

    body.appendChild(header);
    body.appendChild(container);

    
})();