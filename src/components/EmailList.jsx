import React, { useState, useEffect } from "react";
import db from "../firebase";
import "../styles/emailList.css";
import EmailBody from "./EmailBody";
import EmailListSettings from "./EmailListSettings";
import EmailType from "./EmailType";
const EmailList = () => {
  const [email, setEmail] = useState([]);

  useEffect(() => {
    db.collection("emails").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setEmail(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])
  return (
    <>
      <div className="emailList">
        <EmailListSettings />
        <EmailType />

        {
          email.map(({ id, data }) => {
            return <EmailBody
              key={id}
              name={data.fromName}
              email={data.from}
              subject={data.subject}
              message={
                data.message
              }
              time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
            />
          })
        }

      </div>
    </>
  );
};

export default EmailList;
