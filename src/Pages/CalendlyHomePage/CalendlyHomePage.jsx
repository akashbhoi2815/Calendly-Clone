import React, { useEffect } from 'react'
import CalendlyNav2 from '../../components/Calendly/CalendlyNav2'
import CalendlyNavbar from "../../components/Calendly/CalendlyNavbar"
import EventTypes from "../../components/Calendly/EventTypes"


const CalendlyHomePage = () => {
  
  return (
    <div>
        <CalendlyNavbar />
        <CalendlyNav2/>
        
        <EventTypes />
    </div>
  )
}

export default CalendlyHomePage