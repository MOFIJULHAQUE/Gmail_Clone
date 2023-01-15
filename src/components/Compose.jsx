import React from "react";

import RemoveIcon from "@mui/icons-material/Remove";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "../styles/compose.css";

const Compose = () => {
  return (
    <>
      <div className="compose">
        <div className="compose__header">
          <div className="compose__header_left">
            <span>New Message</span>
          </div>
          <div className="compose__header_right">
            <RemoveIcon />
            <OpenInFullIcon />
            <CloseIcon />
          </div>
        </div>

        <div className="compose__body">
          <div className="compose__body__form">
            <input type="email" placeholder="To" />
            <input type="text" placeholder="Subject" />
            <textarea rows="20"></textarea>
          </div>
        </div>

        <div className="compose__footer">
          <div className="compose__footer_Left">
            <button type="submit">
              Send <ArrowDropDownIcon />
            </button>
          </div>

          <div className="compose__footer_Right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <LockPersonIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteOutlineIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Compose;
