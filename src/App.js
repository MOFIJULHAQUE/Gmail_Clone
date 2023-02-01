import { useEffect } from "react";
import Compose from "./components/Compose";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { selectSendMessageIsOpen } from "./features/mailSlice";

// /
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import EmailDetail from "./components/EmailDetail";
import Login from "./components/Login";
import { selectUser, signIn, signOut } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  // console.log(user);
  // console.log(isMessageOpen);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email
        }))

      }else{
        dispatch(signOut);
      }
    })
  })

  return (

    <>

      <Router>
        {
          user ? (
            <div className="App">
              <Header />
              <div className="app_body">
                <SideBar />
                <Routes>

                  <Route path="/" element={<EmailList />} />
                  <Route path="/mail" element={<EmailDetail />} />

                </Routes>
              </div>
              {isMessageOpen && <Compose />}
            </div>
          ) : (<Login />)}


      </Router>
    </>


  );
}

export default App;
