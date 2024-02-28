
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import PropTypes from 'prop-types';
import auth from '../Config/Firebase.config'
import { clearCookie } from '../Api/Auth';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = async () => {
    setLoading(true)
    await clearCookie()
    return signOut(auth)
  }

  const updateUserProfile = ({ name, image, phone }) => {
    // console.log(object);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
      phoneNumber: phone,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      // console.log('CurrentUser-->', currentUser)
      setLoading(false)
    })
    return () => unsubscribe();
  }, [])
  // console.log(loading,user)

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
   children: PropTypes.node
}
export default AuthProvider;