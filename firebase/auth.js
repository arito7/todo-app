import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth();

const useUser = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (mUser) => {
    if (mUser) {
      setUser(mUser);
    } else {
      setUser(null);
    }
  });
  return { user };
};

export { useUser, auth };
