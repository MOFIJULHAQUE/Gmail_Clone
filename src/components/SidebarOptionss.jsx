import React from "react";

import "../styles/sidebarOptions.css";

const SidebarOptionss = ({ Icon, title, number, isActive }) => {
  return (
    <>
      <div
        className={`sidebarOptions ${isActive && "sidebarOptions_isActive"}`}
      >
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
      </div>
    </>
  );
};

export default SidebarOptionss;
