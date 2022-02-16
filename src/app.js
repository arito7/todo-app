import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import React, { useState } from 'react';
import Main from './components/main/main';
import './app.css';
import Data from './data';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDOhVAH_rS0_Vv71reiEXwfRmJez1RYvtE',
    authDomain: 'todo-app-f9a4b.firebaseapp.com',
    projectId: 'todo-app-f9a4b',
    storageBucket: 'todo-app-f9a4b.appspot.com',
    messagingSenderId: '118915543634',
    appId: '1:118915543634:web:d420a21cec92f3833d258b',
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth(app);
  const data = Data();
  const [selectedGroup, setSelectedGroup] = useState('');
  return (
    <div className="app">
      <Header auth={auth} />
      <Sidebar data={data} setSelectedGroup={setSelectedGroup} />
      <Main data={data} selectedGroup={selectedGroup} />
    </div>
  );
};
export default App;
