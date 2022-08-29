import React, { useState } from "react";
import "./MeetingShedule.css";
import Moment from "react-moment";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const MeetingShedule = () => {
  const [addGuests, setAddGuests] = useState(false);
  
  const currentUser =useSelector((store)=>store.authReducer.currentUser)

  const events =useSelector((store)=>store.appReducer.events)
  
   const { id } = useParams()
   console.log("schedule",id)
  
  console.log()
  return (
    <div>
      <div className="outerdiv-meeting">
        <div className="left-container-meeting">
          <button className="back-button">⬅</button>
          <div className="main-div-timebar">
            <h4 id="h4-date" name="user">
              {currentUser.displayName}
            </h4>
            <h2 id="h2-date"> 45 Minute Meeting</h2>
            <h4 id="h4-date">🕒 45 min</h4>
          </div>
          <p id="event-string-p" nme="timeslot">
            🗓️ <Moment format="MMM DD YYYY" />{" "}
          </p>
          <p id="time-zone">🌎 India Standard Time</p>
        </div>

        {/* right section */}

        <div>
          <p className="meetingp">Enter Details</p>

          {/* Name */}
          <div className="input-container-meeting">
            <label className="meeting-label">Name *</label>
            <input className="input-meeting" />
          </div>

          {/* Email  */}
          <div className="input-container-meeting">
            <label>Email *</label>
            <input type="email" className="input-meeting" />
          </div>
          <button
            className={addGuests ? "display-none" : "add-guest-meeting"}
            // onClick = {(e) => setAddGuests(e.target)}
          >
            Add Guests
          </button>
          <div>
            <label className="meeting-label">
              Please share anything that will help prepare for our meeting.
            </label>
            <textarea className="textarea-meeting" ></textarea>
          </div>
          <Link to="/confirm_page">
            <button className="schedule-event-button">Schedule Event</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetingShedule;
