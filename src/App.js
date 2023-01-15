import React from "react";
import Compose from "./components/Compose";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <SideBar />
        <EmailList/>
      </div>
      <Compose/>
    </div>
  );
}

export default App;
