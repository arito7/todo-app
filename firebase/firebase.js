import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDOhVAH_rS0_Vv71reiEXwfRmJez1RYvtE',
  authDomain: 'todo-app-f9a4b.firebaseapp.com',
  projectId: 'todo-app-f9a4b',
  storageBucket: 'todo-app-f9a4b.appspot.com',
  messagingSenderId: '118915543634',
  appId: '1:118915543634:web:d420a21cec92f3833d258b',
};

const app = initializeApp(firebaseConfig);

export default app;
