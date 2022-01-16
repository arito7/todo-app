import './header.css';

const headerComponent = (doc)=>{
    const container = doc.createElement('div');
    container.classList.add('header-container');
    const h1Title = doc.createElement('h1');
    h1Title.textContent = "Todo App";


    container.appendChild(h1Title);

    return container;
};

export {headerComponent};