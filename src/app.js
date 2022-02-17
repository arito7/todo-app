import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import React, { useState } from 'react';
import Main from './components/main/main';
import Data from './data';
import './firebase/firebase';
import { useUser, auth } from './firebase/auth';
import './app.css';

const App = () => {
  const userHook = useUser();
  const data = Data();
  const [selectedGroup, setSelectedGroup] = useState('');
  return (
    <div className="app">
      <Header user={userHook.user} auth={auth} />
      <Sidebar data={data} setSelectedGroup={setSelectedGroup} />
      <Main data={data} selectedGroup={selectedGroup} />
    </div>
  );
};
export default App;
