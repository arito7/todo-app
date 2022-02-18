import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  where,
  query,
  updateDoc,
  setDoc,
} from 'firebase/firestore';

const db = getFirestore();

const addTask = (userid, task) => {
  const userCollRef = collection(db, userid, 'data', 'tasks');
  addDoc(userCollRef, task);
};

const deleteTask = (userid, taskid) => {
  const userCollRef = collection(db, userid, 'data', 'tasks');
  getDocs(query(userCollRef, where('id', '==', taskid))).then((snapshot) => {
    snapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  });
};

const updateTask = (userid, task) => {
  const taskCollRef = collection(db, userid, 'data', 'tasks');
  getDocs(query(taskCollRef, where('id', '==', task.id))).then((snapshot) => {
    snapshot.forEach((doc) => {
      if (doc.data().id === task.id) {
        setDoc(doc.ref, task);
      }
    });
  });
};

const addGroup = (userid, group) => {
  const groupCollRef = collection(db, userid, 'data', 'groups');
  addDoc(groupCollRef, group);
};

const deleteGroup = (userid, groupid) => {
  const groupCollRef = collection(db, userid, 'data', 'groups');
  let groupName = '';
  getDocs(query(groupCollRef, where('id', '==', groupid)))
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        groupName = doc.data().name;
        deleteDoc(doc.ref);
      });
    })
    .then(() => {
      const taskCollRef = collection(db, userid, 'data', 'tasks');
      getDocs(query(taskCollRef, where('group', '==', groupName))).then(
        (snapshot) => {
          snapshot.forEach((doc) => {
            updateDoc(doc.ref, { group: '' });
          });
        }
      );
    });
};

export { db, addTask, deleteTask, addGroup, deleteGroup, updateTask };
