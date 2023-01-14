import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

import "../styles/emailList.css";

const EmailType = () => {
  return (
    <>
      <div className="emailType">
        <div className="emailType_options">
          <InboxIcon />
          <p>Primary</p>
        </div>

        <div className="emailType_options emailType_options--notActive1">
          <LocalOfferIcon />
          <p>Promotions</p>
        </div>

        <div className="emailType_options emailType_options--notActive2">
          <PeopleOutlineIcon />
          <p>Social</p>
        </div>
      </div>
    </>
  );
};

export default EmailType;
