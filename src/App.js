import React from "react";
import Compose from "./components/Compose";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { selectSendMessageIsOpen } from "./features/mailSlice";

// /
import { useSelector } from "react-redux";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  console.log(isMessageOpen);
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <SideBar />
        <EmailList />
      </div>
      {isMessageOpen && <Compose />}
    </div>
  );
}

export default App;
