import React from 'react'
import { IconButton, Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReplyIcon from '@mui/icons-material/Reply';

// 
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';




import "../styles/emailList.css";
import { selectedMail } from '../features/mailSlice';










const EmailDetail = () => {
  const mail = useSelector(selectedMail);
  console.log(mail);



  const navigate = useNavigate();
  return (
    <div className='emaildetails'>
      <div className="emailList_settings">
        <div className="emailList_settings_Left">
          <IconButton>
            <ArrowBackIcon onClick={() => navigate("/")} />
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

      <div className="emaildetails__message">


        <div className="emaildetails__header">

          <div className="emaildetails__header--left">
            <h4>{mail.subject} </h4>
            <IconButton>
              <LabelImportantIcon />

            </IconButton>
          </div>

          <div className="emaildetails__header--right">

            <IconButton>
              <PrintIcon />
            </IconButton>

            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>

        </div>







        <div className="emaildetails__middle--header">

          <div className="emaildetails__middle--header--left">
            <IconButton>
              <Avatar />

            </IconButton>
            <h4>{mail.name}</h4>
            <p>- {mail.email}</p>
          </div>

          <div className="emaildetails__middle--header--right">
            <p>{mail.time}</p>
            <IconButton>
              <StarBorderIcon />
            </IconButton>

            <IconButton>
              <ReplyIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>

        </div>






        <div className="emaildetail__body">
          <p>{mail.message}</p>
        </div>









      </div>




    </div>
  )
}

export default EmailDetail