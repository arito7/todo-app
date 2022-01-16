import './note.css';

const noteComponent = (doc)=>{
    const container = doc.createElement('div');
    container.classList.add('note');
    const noteTitle = doc.createElement('h5');
    noteTitle.classList.add('note-title');
    noteTitle.textContent = "This is a sample note title";

    container.appendChild(noteTitle);

    return container;
};
export {noteComponent};