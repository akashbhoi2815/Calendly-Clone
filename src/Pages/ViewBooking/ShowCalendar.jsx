import React, { useState } from 'react'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./ReactCalendar.css";
import { UserDetails } from './UserDetails';
import {Stack} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";

export const ShowCalendar = () => {
  const [showTime,setShowTime] = useState(false);
  const [value, setValue] = useState(new Date());
  const [selectTime,setSelectTime]  = useState(false);
  const navigate = useNavigate();

  const date = new Date()

  const onChange = (value)=>{
    setValue(value);
    setShowTime(true);
  }
  
  const handleClick =()=>{
     setSelectTime(true);
  }
 
  return (
    <div className='calendarContainer'>
       <div>
            <UserDetails/>
        </div>
        
        <div style={{display:"flex"}}>
        <div style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
        <Calendar onChange={onChange} value={value} activeStartDate={date}/>
        </div>
        {showTime && (
            <div style={{padding:"2%"}}>
            <div style={{marginBottom:"5%"}}>{value.toString()}</div>
            <div style={{display:"flex",width:"250px",height:"50px",flexDirection:"row",justifyContent:"space-around"}}>
             <Stack>
             <button onClick={handleClick} style={{background:"blue",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>10:30 am</button>
             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>11:00 am</button>
             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>2:30 pm</button>
             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>3:00 pm</button>
             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>3:30 pm</button>
             </Stack>
             <Stack>
             <button style={{background:"green",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>Confirm</button>
             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>Confirm</button>
             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>Confirm</button>
             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>Confirm</button>
             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white",padding:"5px"}}>Confirm</button>
             </Stack>
          </div>
          <Link to="/confirm_page"><button style={{marginTop:"45%",padding:'2%',marginLeft:"10px",border:"1px solid blue",width:"100px",borderRadius:"10px",background:"blue",color:"white"}} type='submit'>Next</button></Link>
          </div>
        )}
        </div>
    </div>
  )
}

// <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white"}}>Time</button>
//             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white"}}>Confirm</button>