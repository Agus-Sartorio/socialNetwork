import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { authentication } from '../Firebase/firebase';

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(authentication, (res) => {
      res ? setUser(res) : setUser(null);
      setError("");
      setLoading(false);
    });
  }, []);

  const registerUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        updateProfile(authentication.currentUser, {
          displayName: authentication.displayName,
        });
      })
      .then((res) => console.log(res))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(authentication, email, password)
      .then((res) => console.log(res))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  const logOutUser = () => {
    signOut(authentication);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(authentication, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    registerUser,
    signInUser,
    logOutUser,
    forgotPassword,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
