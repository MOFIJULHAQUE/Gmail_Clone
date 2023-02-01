import React from "react";
import Compose from "./components/Compose";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { selectSendMessageIsOpen } from "./features/mailSlice";

// /
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux";
import EmailDetail from "./components/EmailDetail";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  console.log(isMessageOpen);
  return (
    <Router>

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
    </Router>

  );
}

export default App;
