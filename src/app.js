import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import React, { useState } from 'react';
import Main from './components/main/main';
import './app.css';
import Data from './data';
const App = () => {
  const data = Data();
  const [selectedGroup, setSelectedGroup] = useState('');
  return (
    <div className="app">
      <Header />
      <Sidebar data={data} setSelectedGroup={setSelectedGroup} />
      <Main data={data} selectedGroup={selectedGroup} />
    </div>
  );
};
export default App;
