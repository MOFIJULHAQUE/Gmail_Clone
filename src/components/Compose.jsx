import React, { useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";


// // import { addDoc, collection } from "firebase/firestore";
import firebase from 'firebase/compat/app';

import db from "../firebase";
import { selectUser } from "../features/userSlice";



const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  console.log(to, subject, message);
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  const formSubmit = (e) => {
    e.preventDefault();
    if (to === "") {
      alert("Please enter receiver's email!")

    }
    if (subject === "") {
      alert("Please enter your subject!")

    }
    if (message === "") {
      alert("Please enter your message!")
    }

    db.collection("emails").add({
      to,
      subject,
      message,
      from:user.email,
      fromName : user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })

    setTo("");
    setSubject("");
    setMessage("");

    alert("Mail sent")
    dispatch(closeSendMessage())


  };

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
            <CloseIcon onClick={() => dispatch(closeSendMessage())} />
          </div>
        </div>

        <form onSubmit={formSubmit}>
          <div className="compose__body">
            <div className="compose__body__form">
              <input
                type="email"
                placeholder="To"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea rows="20" onChange={(e) => setMessage(e.target.value)}>
                {message}
              </textarea>
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
        </form>
      </div>
    </>
  );
};

export default Compose;
