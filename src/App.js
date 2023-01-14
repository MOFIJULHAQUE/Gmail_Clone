import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
