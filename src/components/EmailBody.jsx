import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import "../styles/emailList.css";

const EmailBody = ({ name, subject, message, time }) => {
  return (
    <>
      <div className="emailBody">
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
