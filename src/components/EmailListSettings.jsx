import React from "react";
import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "../styles/emailList.css";

const EmailListSettings = () => {
  return (
    <>
      <div className="emailList_settings">
        <div className="emailList_settings_Left">
          <IconButton>
            <CheckBoxOutlineBlankIcon />
          </IconButton>

          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>

          <IconButton>
            <RefreshIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList_settings_Right">
          <p>1-50 of 10,227</p>

          <IconButton>
            <ChevronLeftIcon />
          </IconButton>

          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default EmailListSettings;
