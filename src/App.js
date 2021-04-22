import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase/firebase";
import Login from "./components/Login";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            dislayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      <Login />
    </>
  );
};

export default App;
