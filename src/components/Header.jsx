import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";

import "../styles/Header.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Header = () => {

  //for avatar photo changing
  const user = useSelector(selectUser)

  return (
    <>
      <div className="header">
        {/*  */}
        <div className="header_left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg"
            alt="Logo_Gmail"
            height="30px"
          />
        </div>

        {/*  */}
        <div className="header_middle">
          <div className="search_mail">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input type="text" placeholder="Search mail" />
            <IconButton>
              {/* <ExpandMoreIcon/> */}
              <TuneIcon />
            </IconButton>
          </div>
        </div>

        {/*  */}
        <div className="header_right">
          <IconButton>
            <HelpOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>

          <IconButton>
            <AppsIcon />
          </IconButton>

          <Avatar>
            <img
              src={user?.photoURL}
              alt=""
              height="30px"
            />
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Header;
