import React, { useState, useContext, createContext } from 'react';
import { getLocalUser, setLocalUser, removeLocalUser } from 'utils/common';

const coreContext = createContext();

export const CoreProvider = ({ children }) => {
  const core = useCoreProvider();
  return <coreContext.Provider value={core}>{children}</coreContext.Provider>;
};

export const useCore = () => {
  return useContext(coreContext);
};

// Provider hook that creates core object and handles state
const useCoreProvider = () => {
  const user = getLocalUser();

  const [core, setCore] = useState({
    isLoggedIn: user ? true : false,
    accessToken: user,
  });

  const login = () => {
    const accessToken = 'accessToken';
    setLocalUser(accessToken);
    setCore({ isLoggedIn: true, accessToken });
  };

  const logout = () => {
    removeLocalUser();
    setCore({ isLoggedIn: false });
  };

  return {
    data: core,
    login,
    logout,
  };
};
