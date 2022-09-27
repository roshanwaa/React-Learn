import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ! Use side effects

  useEffect(() => {
    const storageUserLogIn = localStorage.getItem('isLoggedIn');

    if (storageUserLogIn === '1') {
      setIsLoggedIn(true);
      console.log(storageUserLogIn);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // its will set the user email and password to local Storage
    localStorage.setItem('isLoggedIn', '1');
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // its remove data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('Email');
    localStorage.removeItem('Password');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
