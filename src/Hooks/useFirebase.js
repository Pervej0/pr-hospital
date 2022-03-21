import firebaseAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthentication();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState("");

  //   user create by email/pass
  const signUp = (email, pass, name, location, navigate) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const userInfo = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setUser(userInfo);
            setIsloading(false);
            saveToUser(name, email, "POST");
            const destination = location?.state?.form || "/";
            navigate(destination);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
        setIsloading(false);
      });
  };

  // signin
  const signIn = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // google signin
  const googleSignIn = (location, navigate) => {
    setIsloading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
        const user = result.user;
        setUser(user);
        saveToUser(user.displayName, user.email, "PUT");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // rendering observer
  useEffect(() => {
    setIsloading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsloading(false);
    });
  }, [auth]);

  // check is admin or not
  useEffect(() => {
    setIsloading(true);
    fetch(`http://localhost:5000/admin/${user?.email}`)
      .then((res) => res.json())
      .then((user) => {
        setIsAdmin(user.admin);
        setIsloading(false);
      });
  }, [user]);

  // save user to db
  const saveToUser = (displayName, email, method) => {
    const user = { displayName, email };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  return {
    user,
    error,
    isLoading,
    isAdmin,
    googleSignIn,
    signIn,
    signUp,
    logOut,
  };
};

export default useFirebase;
