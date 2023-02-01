import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"


import "../styles/emailList.css";

// store's state
import { openMessage } from "../features/mailSlice";

const EmailBody = ({ name,email, subject, message, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const setMail = () => {
    dispatch(openMessage({
      name,
      email,
      subject,
      message,
      time,
    }))
    navigate("./mail")

  }


  return (
    <>
      <div className="emailBody" onClick={setMail} style={{ cursor: "pointer" }} >
        <div className="emailBody_left">
          <CheckBoxOutlineBlankIcon />
          <StarBorderIcon />
          <h4>{name}</h4>
        </div>

        <div className="emailBody_middle">
          <div className="emailBody_middle_msg">
            <p>
              <b>{subject} </b> -
              {message}
            </p>
          </div>
        </div>

        <div className="emailBody_right">
          <p>{time}</p>
        </div>
      </div>
    </>
  );
};

export default EmailBody;
