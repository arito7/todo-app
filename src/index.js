import { headerComponent } from "./components/header/header";
import { noteComponent } from "./components/note/note";
import { noteContainerComponent } from "./components/note-container/note-container";
import './index.css';
(()=>{
    const body = document.querySelector('body');
    const container = document.createElement('div');
    const header = headerComponent(document);
    container.classList.add('container');

    const noteContainer = noteContainerComponent(document);
    for (let i = 0; i < 6; i++){
        const note = noteComponent(document);
        noteContainer.appendChild(note);
    }

    container.appendChild(noteContainer);

    body.appendChild(header);
    body.appendChild(container);

    
})();