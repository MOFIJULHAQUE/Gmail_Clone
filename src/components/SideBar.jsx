import React from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from "@mui/icons-material/Description";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import ChatIcon from "@mui/icons-material/Chat";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LabelIcon from "@mui/icons-material/Label";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import KeyboardIcon from "@mui/icons-material/Keyboard";

import "../styles/sidebar.css";
import SidebarOptionss from "./SidebarOptionss";
import { useDispatch } from "react-redux";
import {openSendMessage} from "../features/mailSlice"





const SideBar = () => {


const dispatch = useDispatch()



  return (
    <>
      <div className="sidebar">
        <Button startIcon={<EditIcon />} className="compose_btn"  onClick={()=>dispatch(openSendMessage())}  >
          Compose
        </Button>
        <SidebarOptionss
          Icon={InboxIcon}
          title="Inbox"
          number={"224"}
          isActive={true}
        />

        <SidebarOptionss Icon={StarBorderIcon} title="Starred" number={"224"} />

        <SidebarOptionss Icon={AccessTimeIcon} title="Snoozed" number={"224"} />

        <SidebarOptionss Icon={SendIcon} title="Sent" number={"224"} />

        <SidebarOptionss Icon={DescriptionIcon} title="Drafts" number={"224"} />

        <SidebarOptionss
          Icon={LabelImportantIcon}
          title="Important"
          number={"224"}
        />

        <SidebarOptionss Icon={ChatIcon} title="Chats" number={"224"} />

        <SidebarOptionss
          Icon={ScheduleSendIcon}
          title="Scheduled"
          number={"224"}
        />

        <SidebarOptionss
          Icon={MarkAsUnreadIcon}
          title="All Mail"
          number={"224"}
        />

        <SidebarOptionss Icon={ErrorOutlineIcon} title="Spam" number={"224"} />

        <SidebarOptionss Icon={DeleteOutlineIcon} title="Bin" number={"224"} />

        <SidebarOptionss Icon={LabelIcon} title="Categories" number={"224"} />

        <SidebarOptionss Icon={ExpandMoreIcon} title="More" number={"224"} />

        <h3 className="sidebarOption_heading">Meet</h3>

        <SidebarOptionss
          Icon={VideoCallIcon}
          title="New Meeting"
          number={"224"}
        />

        <SidebarOptionss
          Icon={KeyboardIcon}
          title="Join a meeting"
          number={"224"}
        />
      </div>
    </>
  );
};

export default SideBar;
