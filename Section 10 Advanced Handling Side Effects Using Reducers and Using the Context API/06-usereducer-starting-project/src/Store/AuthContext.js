import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  isLoggedOut: () => {},
  onLogin: (email, password) => {
    console.log(email, password);
  },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  const logOutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('Password');
    localStorage.removeItem('Email');
    setIsLoggedIn(false);
  };
  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    localStorage.setItem('Password', password);
    localStorage.setItem('Email', email);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logOutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
