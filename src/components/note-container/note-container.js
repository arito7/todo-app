import './note-container.css';

const noteContainerComponent = (doc)=>{
    const container = doc.createElement('div');
    container.classList.add('note-container');

    return container;
}

export {noteContainerComponent}