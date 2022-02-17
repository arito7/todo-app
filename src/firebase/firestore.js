import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  where,
  query,
} from 'firebase/firestore';

const db = getFirestore();

const addTask = (userid, task) => {
  const userCollRef = collection(db, userid);
  addDoc(userCollRef, task).then((docRef) => {
    console.log('added', docRef.id);
  });
};

const deleteTask = (userid, taskid) => {
  const userCollRef = collection(db, userid);
  getDocs(query(userCollRef, where('id', '==', taskid))).then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log('deleting task', doc.data().id);
      console.log(doc.ref);
      deleteDoc(doc.ref);
    });
  });
};
export { db, addTask, deleteTask };
