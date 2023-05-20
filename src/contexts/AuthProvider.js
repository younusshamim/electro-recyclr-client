import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import auth from "../config//firebase/firebase";
import { useQuery } from "react-query";
import { onGetUserDetails } from "../services/users-services";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const {
    data,
    isLoading,
    isRefetching,
    refetch: refetchUser,
  } = useQuery(
    ["userDetails", user?.email],
    () => onGetUserDetails(user?.email),
    {
      enabled: !!user?.email,
    }
  );
  const userDetails = data?.data;

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const updateUserPassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    googleSignIn,
    updateUser,
    updateUserPassword,
    logOut,
    user,
    userDetails,
    loading: loading || isLoading || isRefetching,
    refetchUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
