import './header.css';
import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const Header = (props) => {
  const provider = new GoogleAuthProvider();
  const { auth } = props;
  const [user, setUser] = useState(() => {
    if (auth) {
      return auth.currentUser;
    }
    return null;
  });

  function onSignInClick() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // this gives you a google access token.
        // you can use it to access the google api
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // the signed in user info
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // the email of the suer's account used
        const email = error.email;
        // the auth credential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('logout successful');
        setUser(auth.currentUser);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="header">
      <h1>Todo App</h1>
      {user ? (
        <UserButton user={user} onSignOut={onSignOut} />
      ) : (
        <SignInButton onSignIn={onSignInClick} />
      )}
    </div>
  );
};

const SignInButton = (props) => {
  const { onSignIn } = props;
  return (
    <button
      onClick={() => {
        onSignIn();
      }}
    >
      Sign In
    </button>
  );
};

const UserButton = (props) => {
  const { user, onSignOut } = props;

  return (
    <div className="user">
      <img src={user.photoURL} alt="" />
      <p>{user.displayName}</p>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
};
export default Header;
