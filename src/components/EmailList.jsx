import React from "react";
import "../styles/emailList.css";
import EmailBody from "./EmailBody";
import EmailListSettings from "./EmailListSettings";
import EmailType from "./EmailType";
const EmailList = () => {
  return (
    <>
      <div className="emailList">
        <EmailListSettings />
        <EmailType />
        <EmailBody
          name={"Mofijul Haque"}
          subject={"This is a subject"}
          message={
            "This is message,This is message,This is message,This is message,This is message,This is message,This is message,This is message,This is message,This is message,This is message,This is message,is is message,This is message,This is message,This is message,This is message,This is message,"
          }
          time={"01:47 PM"}
        />
      </div>
    </>
  );
};

export default EmailList;
