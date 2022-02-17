import './firebase/firebase';
import { useUser, auth } from './firebase/auth';
import './firebase/firestore';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import React, { useState } from 'react';
import Main from './components/main/main';
import Data from './data';
import './app.css';

const App = () => {
  const userHook = useUser();
  const data = Data(userHook.user);
  const [selectedGroup, setSelectedGroup] = useState('');
  // passing auth to header instead of importing auth in header.js because
  // auth is not initialized at the time of rendering header, i think. well, it threw an error at least
  return (
    <div className="app">
      <Header user={userHook.user} auth={auth} />
      <Sidebar data={data} setSelectedGroup={setSelectedGroup} />
      <Main data={data} selectedGroup={selectedGroup} />
    </div>
  );
};
export default App;
